import React, { useState } from 'react';
import "./ProfileCard.scss";
import { RiEdit2Line } from 'react-icons/ri';
import Modal from 'react-modal';
import { RxCross2 } from 'react-icons/rx';

// Modal styles
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ProfileCard = () => {
    // State for controlling modal open/close
    const [modalIsOpen, setIsOpen] = useState(false);

    // State for form data (name and bio)
    const [formData, setFormData] = useState({
        name: '',
        bio: ''
    });

    const [image, setImage] = useState(null);


    // Function to open the modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted: ", formData);
        closeModal();
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // Check if file type is SVG, PNG, or JPG
        if (file && (file.type === 'image/svg+xml' || file.type === 'image/png' || file.type === 'image/jpeg')) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            // Handle invalid file type (optional)
            alert('Please select a valid image file (SVG, PNG, JPG).');
        }
    };

    return (
        <div className='ProfileCard'>
            <div className="card">
                <div className="profile_img">
                    {image ? (
                        <img src={image} alt="Uploaded Image" />
                    ) :
                        <img src="https://i.pinimg.com/474x/28/7f/05/287f05ebfa92bb4def8034817dab82af.jpg" alt="" />}
                </div>
                <h4>{formData.name}</h4>
                <p>{formData.bio}</p>
                <button className='icon' onClick={openModal}><RiEdit2Line /></button>
            </div>

            {/* Modal for editing profile */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Edit Profile Modal"
            >
                <div className="modal_head">
                    <h2>Edit Profile</h2>
                    <button onClick={closeModal}><RxCross2 /></button>
                </div>
                <div className="modal_content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="profileImg">Name</label>
                            <input type="file" accept=".svg, .png, .jpg" onChange={handleImageChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="profileName">Name</label>
                            <input
                                type="text"
                                id="profileName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profileBio">Bio</label>
                            <textarea
                                id="profileBio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                placeholder="Enter your bio"
                            ></textarea>
                        </div>
                        <div className="form-buttons">
                            <button type="button" onClick={closeModal}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default ProfileCard;
