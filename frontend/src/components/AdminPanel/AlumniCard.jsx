import React from 'react';

function AlumniCard({ alumni, onVerify }) {
    return (
        <div className="border p-4 rounded-md shadow-md bg-white">
            <h3 className="text-lg font-bold">{alumni.name}</h3>
            <p>Email: {alumni.email}</p>

            {/* Link to Degree Certificate */}
            <a
                href={alumni.degreeCertificateUrl} // This should be the URL for the certificate
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
            >
                View Degree Certificate
            </a>

            {alumni.verified ? (
                <p className="text-green-600 font-semibold">Verified</p>
            ) : (
                <button
                    className="bg-primary text-white px-4 py-2 rounded-md mt-2"
                    onClick={() => onVerify(alumni.id)} // Call onVerify on button click
                >
                    Verify
                </button>
            )}
        </div>
    );
}

export default AlumniCard;
