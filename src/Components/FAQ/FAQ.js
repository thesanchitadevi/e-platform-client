import React from 'react';

const FAQ = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">There is a huge value in </span>
                        </span>{' '}
                        learning with instant feedback
                    </h2>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Brief about demands of graphics design.
                            </p>
                            <p className="text-gray-700">
                                Graphic designers have become more creative using computer graphics techniques.
                                <br />
                                <br />
                                Employment of graphic designers is projected to grow 3 percent from 2021 to 2031, slower than the average for all occupations. Despite limited employment growth, about 24,800 openings for graphic designers are projected each year, on average, over the decade
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Can anyone learn web development?
                            </p>
                            <p className="text-gray-700">
                                Anyone can become a web developer.
                                <br />
                                <br />
                                You don't need to be a tech wizard or possess a never-ending list of formal qualifications; as long as you're passionate about the field and willing to learn, a career in web development is well within your reach.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How much can I make as a programmer?
                            </p>
                            <p className="text-gray-700">
                                
                                The median annual salary for Computer Programmers was $93,000 in May 2021. The median annual salary for Software Developers was $109,020 in May 2021. The median annual salary for Web Developers was $78,300 in May 2021. The median annual salary for Cybersecurity/Information Security Analyst was $102,600 in May 2021
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Can I be an animator after learning motion?
                            </p>
                            <p className="text-gray-700">
                                
                                To work as an animator, you need to have formal education in this field. Find an animation or design course that matches with your career goals and start learning the basics of designing.  The Internet has everything. You can learn all about designing tools, concepts and skills via the wide range of online courses available on our website
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                English is not my first language. Can I enroll in your english course?
                            </p>
                            <p className="text-gray-700">
                                If English is your non-native language then find an opportunities to learn and communicate in English
                                <br />
                                <br />
                                Our course will definitely help you to learn the language.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Is it really necessary to learn ms office?
                            </p>
                            <p className="text-gray-700">
                                In the current job market, knowledge of Microsoft Office tools is essential as it helps to make your mark. Presentations, word files, excel sheets, working with databases – are all a part of daily tasks for most of us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;