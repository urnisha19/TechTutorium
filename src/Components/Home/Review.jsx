//It is a static component, will make it dynamic later

import { FaStar } from "react-icons/fa";

const Review = () => {
    return (
        <div className="mx-4 md:mx-8 lg:mx-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-10 md:my-16 lg:my-20 text-center text-primary">
                What People Tell About Us
            </h1>
            <div className="bg-base-200 p-6 rounded-lg">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {/* Overview - Start */}
                    <div>
                        <div className="rounded-lg border p-4 border-base-content">
                            <h2 className="mb-3 text-lg font-bold text-base-content lg:text-xl">Customer Reviews</h2>
                            <div className="mb-0.5 flex items-center gap-2">
                                {/* Stars - Start */}
                                <div className="-ml-1 flex gap-0.5">
                                    <FaStar className="h-6 w-6 text-yellow-400" />
                                    <FaStar className="h-6 w-6 text-yellow-400" />
                                    <FaStar className="h-6 w-6 text-yellow-400" />
                                    <FaStar className="h-6 w-6 text-yellow-400" />
                                    <FaStar className="h-6 w-6 text-yellow-400" />
                                </div>
                                {/* Stars - End */}
                                <span className="text-sm font-semibold text-base-content">4/5</span>
                            </div>
                            <span className="block text-sm text-base-content">Based on 27 reviews</span>
                            <div className="my-5 flex flex-col gap-2 border-t border-b py-5 border-base-content">
                                {/* Star Ratings - Start */}
                                {[
                                    { label: '5 Star', width: 'w-3/4' },
                                    { label: '4 Star', width: 'w-1/2' },
                                    { label: '3 Star', width: 'w-1/6' },
                                    { label: '2 Star', width: 'w-1/4' },
                                    { label: '1 Star', width: 'w-1/12' },
                                ].map((star, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="w-10 whitespace-nowrap text-right text-sm text-base-content">{star.label}</span>
                                        <div className="flex h-4 flex-1 overflow-hidden rounded bg-base-300">
                                            <span className={`h-full ${star.width} rounded bg-yellow-400`}></span>
                                        </div>
                                    </div>
                                ))}
                                {/* Star Ratings - End */}
                            </div>
                            <a href="#" className="block rounded-lg border bg-base-100 px-4 py-2 text-center text-sm font-semibold text-primary outline-none ring-primary transition duration-100 hover:bg-base-300 focus-visible:ring active:bg-base-300 md:px-8 md:py-3 md:text-base">Write a review</a>
                        </div>
                    </div>
                    {/* Overview - End */}
                    {/* Reviews - Start */}
                    <div className="lg:col-span-2">
                        <div className="border-b pb-4 md:pb-6 border-base-content">
                            <h2 className="text-lg font-bold text-base-content lg:text-xl">Top Reviews</h2>
                        </div>
                        <div className="divide-y divide-base-content">
                            {/* Individual Reviews - Start */}
                            {[
                                { name: 'John McCulling', date: 'August 28, 2021', review: 'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.' },
                                { name: 'Kate Berg', date: 'July 21, 2021', review: 'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.' }
                            ].map((review, index) => (
                                <div key={index} className="flex flex-col gap-3 py-4 md:py-8">
                                    <div>
                                        <span className="block text-sm font-bold text-base-content">{review.name}</span>
                                        <span className="block text-sm text-base-content">{review.date}</span>
                                    </div>
                                    {/* Stars - Start */}
                                    <div className="-ml-1 flex gap-0.5">
                                        <FaStar className="h-6 w-6 text-yellow-400" />
                                        <FaStar className="h-6 w-6 text-yellow-400" />
                                        <FaStar className="h-6 w-6 text-yellow-400" />
                                        <FaStar className="h-6 w-6 text-yellow-400" />
                                        <FaStar className="h-6 w-6 text-yellow-400" />
                                    </div>
                                    {/* Stars - End */}
                                    <p className="text-base-content">{review.review}</p>
                                </div>
                            ))}
                            {/* Individual Reviews - End */}
                        </div>
                        <div className="border-t pt-6 border-base-content">
                            <a href="#" className="flex items-center gap-0.5 font-semibold text-primary transition duration-100 hover:text-primary-focus active:text-primary-content">Read all reviews</a>
                        </div>
                    </div>
                    {/* Reviews - End */}
                </div>
            </div>
        </div>
    );
};

export default Review;
