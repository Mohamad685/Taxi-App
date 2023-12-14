import React from 'react';

const FeedbackForm = ({ feedbackFormData, formErrors, handleFeedbackChange, handleFeedbackSubmit }) => {
  return (
    <div className="feedback-form">
      <div className="input-group">
        <label className="passenger-label" htmlFor="rating">
          Rating (1-5):
        </label>
        <input
          type="number"
          id="rating"
          className="passenger-input"
          placeholder="Enter rating"
          value={feedbackFormData.rating}
          onChange={handleFeedbackChange}
        />
        <div className="error-message">{formErrors.rating}</div>
      </div>

      <div className="input-group">
        <label className="passenger-label" htmlFor="feedback">
          Feedback:
        </label>
        <input
          type="text"
          id="feedback"
          className="passenger-feedback-input"
          placeholder="Enter feedback"
          value={feedbackFormData.feedback}
          onChange={handleFeedbackChange}
        />
        <div className="error-message">{formErrors.feedback}</div>
      </div>

      <button type="button" className="submit-button" onClick={handleFeedbackSubmit}>
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
