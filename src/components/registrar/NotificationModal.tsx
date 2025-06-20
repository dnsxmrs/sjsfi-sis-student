import React, { useState } from 'react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (method: 'email' | 'sms' | 'both', phone?: string) => void;
  studentName: string;
  email: string;
  missingRequirements: string[];
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  studentName,
  email,
  missingRequirements,
}) => {
  const [notificationMethod, setNotificationMethod] = useState<'email' | 'sms' | 'both'>('email');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if ((notificationMethod === 'sms' || notificationMethod === 'both') && !phoneNumber.trim()) {
      alert('Please enter a phone number for SMS notification');
      return;
    }

    setIsLoading(true);
    await onConfirm(notificationMethod, phoneNumber.trim() || undefined);
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Send Missing Requirements Notification
        </h2>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Student:</strong> {studentName}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Missing Requirements:</strong>
          </p>
          <ul className="text-sm text-gray-600 ml-4 mb-4">
            {missingRequirements.map((req, index) => (
              <li key={index} className="list-disc">
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black">
            Notification Method
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="notificationMethod"
                value="email"
                checked={notificationMethod === 'email'}
                onChange={(e) => setNotificationMethod(e.target.value as 'email')}
                className="mr-2"
              />
              <span className="text-sm text-black">Email only</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="notificationMethod"
                value="sms"
                checked={notificationMethod === 'sms'}
                onChange={(e) => setNotificationMethod(e.target.value as 'sms')}
                className="mr-2"
              />
              <span className="text-sm text-black">SMS only</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="notificationMethod"
                value="both"
                checked={notificationMethod === 'both'}
                onChange={(e) => setNotificationMethod(e.target.value as 'both')}
                className="mr-2"
              />
              <span className="text-sm text-black">Both Email and SMS</span>
            </label>
          </div>
        </div>

        {(notificationMethod === 'sms' || notificationMethod === 'both') && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number (e.g., +639123456789)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full text-black border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Include country code (e.g., +63 for Philippines)
            </p>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 bg-gray-300 text-black px-4 py-2 rounded text-sm hover:bg-gray-400 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex-1 bg-red-800 text-white px-4 py-2 rounded text-sm hover:bg-red-900 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <span>Send Notification</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
