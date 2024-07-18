
import React, { useState } from 'react';
import './Admin.css';

const AdminPanel = () => {
    const [content, setContent] = useState('');
    const [showOnWebsite, setShowOnWebsite] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Content:', content);
        console.log('Show on website:', showOnWebsite);
    };

    return (
        <div className='app-body'>
        <div className="admin-container">
            <h2 className="admin-title">Admin Panel</h2>
            <form className="admin-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="content" className="form-label">Add content for new section</label>
                    <textarea 
                        id="content" 
                        className="form-textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Content"
                        required 
                    />
                </div>
              
                <button type="submit" className="create-button">Create</button>
            </form>
        </div>
        </div>
    );
};

export default AdminPanel;
