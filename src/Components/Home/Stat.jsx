//It is a static component, will make it dynamic later

import { FaPhotoVideo, FaStar } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

const Stat = () => {
    return (
        <div className="max-w-8xl mx-auto mb-10 text-center xl:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-10 md:my-16 lg:my-20 text-center text-primary">Overview</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 xl:justify-star">

                <div className="stats shadow text-2xl">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <GiNotebook />
                        </div>
                        <div className="stat-title">Courses</div>
                        <div className="stat-value text-primary">40+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <FaPhotoVideo />
                        </div>
                        <div className="stat-title">Videos</div>
                        <div className="stat-value text-accent">60+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <PiStudentFill />
                        </div>
                        <div className="stat-title">Learners</div>
                        <div className="stat-value text-primary">700+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStar />
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value text-secondary">200+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;