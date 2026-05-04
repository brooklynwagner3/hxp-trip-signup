import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../supabaseClient';
import './SignupForm.css';

export default function SignUpForm({ onSuccess, onBack }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError(null)

    const { error } = await supabase.from('trip_applications').insert([
      {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        emergency_contact_name: data.emergencyName,
        emergency_contact_phone: data.emergencyPhone,
        dietary_restrictions: data.dietary || null,
        why_join: data.whyJoin,
      },
    ])

    if (error) {
      setSubmitError('Something went wrong, please try again.')
      setIsSubmitting(false)
      return
    }

    onSuccess()
  }

  return (
    <div className="sf-wrap">

      <div className="sf-header">
        <div className="sf-header-title">Budapest, Hungary — July 12–28, 2026</div>
      </div>

      <button className="sf-back-link" onClick={onBack}>← Back to Home</button>

      <div className="sf-body">
        <div className="sf-intro">
          <h2>Apply for This Trip!</h2>
          <p>Fill out the form below and we'll be in touch within 3–5 business days. All fields marked <span className="sf-required">*</span> are required.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* FULL NAME */}
          <div className="sf-group">
            <label className="sf-label">Full Name <span className="sf-required">*</span></label>
            <input
              className={`sf-input ${errors.fullName ? 'sf-input--error' : ''}`}
              placeholder="Brooklyn Wagner"
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && <div className="sf-error">{errors.fullName.message}</div>}
          </div>

          {/* EMAIL + PHONE */}
          <div className="sf-row">
            <div className="sf-group">
              <label className="sf-label">Email <span className="sf-required">*</span></label>
              <input
                className={`sf-input ${errors.email ? 'sf-input--error' : ''}`}
                type="email"
                placeholder="brooklyn@email.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                })}
              />
              {errors.email && <div className="sf-error">{errors.email.message}</div>}
            </div>

            <div className="sf-group">
              <label className="sf-label">Phone <span className="sf-required">*</span></label>
              <input
                className={`sf-input ${errors.phone ? 'sf-input--error' : ''}`}
                type="tel"
                placeholder="(801) 000-0000"
                {...register('phone', {
                  required: 'Phone is required',
                  pattern: { value: /^[0-9()\-\s+]{7,15}$/, message: 'Enter a valid phone number' },
                })}
              />
              {errors.phone && <div className="sf-error">{errors.phone.message}</div>}
            </div>
          </div>

          {/* EMERGENCY CONTACT */}
          <div className="sf-section-label">Emergency Contact</div>
          <div className="sf-row">
            <div className="sf-group">
              <label className="sf-label">Their Name <span className="sf-required">*</span></label>
              <input
                className={`sf-input ${errors.emergencyName ? 'sf-input--error' : ''}`}
                placeholder="Brooklyn Wagner"
                {...register('emergencyName', { required: 'Emergency contact name is required' })}
              />
              {errors.emergencyName && <div className="sf-error">{errors.emergencyName.message}</div>}
            </div>

            <div className="sf-group">
              <label className="sf-label">Their Phone <span className="sf-required">*</span></label>
              <input
                className={`sf-input ${errors.emergencyPhone ? 'sf-input--error' : ''}`}
                type="tel"
                placeholder="(801) 000-0000"
                {...register('emergencyPhone', {
                  required: 'Emergency contact phone is required',
                  pattern: { value: /^[0-9()\-\s+]{7,15}$/, message: 'Enter a valid phone number' },
                })}
              />
              {errors.emergencyPhone && <div className="sf-error">{errors.emergencyPhone.message}</div>}
            </div>
          </div>

          {/* DIETARY RESTRICTIONS */}
          <div className="sf-group">
            <label className="sf-label">Dietary Restrictions <span className="sf-optional">(optional)</span></label>
            <input
              className="sf-input"
              placeholder="e.g. vegetarian, gluten-free, nut allergy..."
              {...register('dietary')}
            />
          </div>

          {/* WHY JOIN */}
          <div className="sf-group">
            <label className="sf-label">Why do you want to come? <span className="sf-required">*</span></label>
            <textarea
              className={`sf-input sf-textarea ${errors.whyJoin ? 'sf-input--error' : ''}`}
              placeholder="Tell us a little about yourself and what draws you to this trip..."
              rows={5}
              {...register('whyJoin', {
                required: 'Please tell us why you want to join',
              })}
            />
            {errors.whyJoin && <div className="sf-error">{errors.whyJoin.message}</div>}
          </div>

          {/* SUBMIT ERROR */}
          {submitError && <div className="sf-submit-error">{submitError}</div>}

          {/* SUBMITT */}
          <button className="sf-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application →'}
          </button>

          <p className="sf-fine-print">
            By submitting you agree to be contacted by the HXP team regarding this trip.
          </p>

        </form>
      </div>
    </div>
  )
}