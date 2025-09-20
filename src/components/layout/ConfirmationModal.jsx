import React, { useEffect } from 'react';

const ConfirmationModal = ({
  show,
  onHide,
  onConfirm,
  title,
  message,
  confirmText = 'Delete',
  cancelText = 'Cancel',
  variant = 'danger',
  loading = false,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && show) {
        onHide();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [show, onHide]);

  if (!show) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onHide();
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'danger':
        return 'fa-exclamation-triangle';
      case 'warning':
        return 'fa-exclamation-circle';
      case 'info':
        return 'fa-info-circle';
      default:
        return 'fa-question-circle';
    }
  };

  const getConfirmIcon = () => {
    switch (variant) {
      case 'danger':
        return 'fa-trash';
      case 'warning':
        return 'fa-exclamation';
      case 'info':
        return 'fa-check';
      default:
        return 'fa-check';
    }
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title d-flex align-items-center">
              <i className={`fa ${getIcon()} text-${variant} me-2`}></i>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onHide}
              aria-label="Close"
              disabled={loading}
            ></button>
          </div>
          <div className="modal-body py-4">
            <p className="mb-0 fs-6">{message}</p>
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="btn btn-secondary" onClick={onHide} disabled={loading}>
              {cancelText}
            </button>
            <button
              type="button"
              className={`btn btn-${variant}`}
              onClick={onConfirm}
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin me-2"></i>
                  Processing...
                </>
              ) : (
                <>
                  <i className={`fa ${getConfirmIcon()} me-2`}></i>
                  {confirmText}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
