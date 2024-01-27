import React from "react";

const ModalA = ({ closeModal }) => {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">All Contacts</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">
          {/* Add your content for All Contacts here */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa porro
          dolorem laborum voluptatibus vitae cumque modi, id eveniet quis
          commodi nesciunt consequatur consequuntur deserunt at dolor quod? Ut,
          odit ipsam?
        </div>
        <div className="modal-footer">
          {/* Add your footer content here */}
          <button type="button" className="btn btn-primary">
            Modal Button A
          </button>
          <button type="button" className="btn btn-warning">
            Modal Button B
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalA;
