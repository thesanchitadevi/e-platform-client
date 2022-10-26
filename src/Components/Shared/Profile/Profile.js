import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="flex flex-col justify-center w-9/12 mx-auto max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100 mt-5">
                <img src={user.photoURL
                } alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-400">Email Address : <br/> {user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;