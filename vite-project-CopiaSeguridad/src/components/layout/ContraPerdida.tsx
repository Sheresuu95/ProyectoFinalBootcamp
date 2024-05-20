import React, { useEffect } from 'react';

interface BulmaModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ContraPerdida: React.FC<BulmaModalProps> = ({ id, title, children }) => {
  useEffect(() => {
    const modalTriggerButtons = document.querySelectorAll('.js-modal-trigger');

    modalTriggerButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetModalId = (button as HTMLButtonElement).getAttribute('data-target');
        const targetModal = document.getElementById(targetModalId!);
        if (targetModal) {
          targetModal.classList.add('is-active');
        }
      });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
          const targetElement = event.target as HTMLElement;
          if (targetElement && (targetElement === modal || targetElement.classList.contains('delete') || targetElement.classList.contains('modal-background'))) {
            modal.classList.remove('is-active');
          }
        });
    });

    return () => {
      modalTriggerButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
      modals.forEach((modal) => {
        modal.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="modal" id={id}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          {children}
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContraPerdida;
