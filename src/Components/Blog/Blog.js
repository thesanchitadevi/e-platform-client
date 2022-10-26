import React from 'react';

const Blog = () => {
    return (
        <div className="space-y-4 w-9/12 mx-auto my-10">
            <details className="group border-l-4 border-slate-500 bg-gray-50 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What is cors?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                </p>
            </details>

            <details className="group border-l-4 border-slate-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    <br />
                    Others User Authentication Platforms [Auth0, Firebase Alternatives] <br />
                    STYTCH. <br />
                    Ory. <br />
                    Supabase. <br />
                    Okta. <br />
                    PingIdentity. <br />
                    Keycloak. <br />
                    Frontegg.
                </p>
            </details>
            <details className="group border-l-4 border-slate-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        How does the private route work?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </details>
            <details className="group border-l-4 border-slate-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What is Node? How does Node work?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">      
                    Node is a used as backend service where javascript works on the server-side of the application. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                </p>
            </details>
        </div>

    );
};

export default Blog;