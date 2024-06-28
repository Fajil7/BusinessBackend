import React from "react";

const FormCard = ({ form, handleStatusUpdate }) => {
    const { _id, name, status,email, whatsappno } = form;

    const handleApprove = () => {
        handleStatusUpdate(_id, "approved");
    };

    const handleReject = () => {
        handleStatusUpdate(_id, "rejected");
    };

    // const handlePending = () => {
    //     handleStatusUpdate(_id, "pending");
    // };

    return (
        <div className="card text-md">
            <h2 className=" text-2xl text-center font-bold">{name}</h2>
            <p>Email Id: {email}</p>
            <p>Mobile No: {whatsappno}</p>
            <p className={`${status === "pending" ?" text-yellow-600": status === "rejected" ?" text-red-700": " text-green-600"}`}>Current status: {status}</p>
            <div className=" flex gap-4 mt-6">
                <button className=" bg-green-700 rounded-md text-white px-4 py-2 hover:bg-opacity-80 transition-all duration-300" onClick={handleApprove} disabled={status === "approved"}>
                    Approve
                </button>
                <button className=" bg-red-700 rounded-md text-white px-4 py-2 hover:bg-opacity-80 transition-all duration-300" onClick={handleReject} disabled={status === "rejected"}>
                    Reject
                </button>
                {/* <button className=" bg-yellow-600 rounded-md text-white px-4 py-2 hover:bg-opacity-80 transition-all duration-300" onClick={handlePending} disabled={status === "pending"}>
                    Pending
                </button> */}
            </div>
        </div>
    );
};

export default FormCard;
