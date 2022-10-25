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
                                Space, the final frontier. These are the voyages of the Starship
                                Enterprise. Its five-year mission: to explore strange new
                                worlds.
                                <br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually
                                our duty to future generations.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Can anyone learn web development?
                            </p>
                            <p className="text-gray-700">
                                Well, the way they make shows is, they make one show. That
                                show's called a pilot.
                                <br />
                                <br />
                                Then they show that show to the people who make shows, and on
                                the strength of that one show they decide if they're going to
                                make more shows. Some pilots get picked and become television
                                programs.Some don't, become nothing. She starred in one of the
                                ones that became nothing.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How mush does a programmer income?
                            </p>
                            <p className="text-gray-700">
                                A flower in my garden, a mystery in my panties. Heart attack
                                never stopped old Big Bear. I didn't even know we were calling
                                him Big Bear.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Can I be an animator after learning motion?
                            </p>
                            <p className="text-gray-700">
                                The first mate and his Skipper too will do their very best to
                                make the others comfortable in their tropic island nest.
                                <br />
                                <br />
                                Michael Knight a young loner on a crusade to champion the cause
                                of the innocent. The helpless. The powerless in a world of
                                criminals who operate above the law. Here he comes Here comes
                                Speed Racer. He's a demon on wheels.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                English is not my first language. Can I enroll in your english course?
                            </p>
                            <p className="text-gray-700">
                                A business big enough that it could be listed on the NASDAQ goes
                                belly up. Disappears!
                                <br />
                                <br />
                                It ceases to exist without me. No, you clearly don't know who
                                you're talking to, so let me clue you in.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Is it really necessary to learn ms office?
                            </p>
                            <p className="text-gray-700">
                                This is not about revenge. This is about justice. A lot of
                                things can change in twelve years, Admiral. Well, that's
                                certainly good to know. About four years. I got tired of hearing
                                how young I looked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;