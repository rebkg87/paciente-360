import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { todaysAlerts, todaysAppointments } from "../data/appointments";
const Dashboard = () => {
    const navigate = useNavigate();
    const name = "López";

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <section className="bg-[url('/img/dashboard_img.png')] bg-[right_bottom_5rem] bg-fixed bg-[length:52rem_33.188rem] bg-no-repeat w-full text-dark-green px-[6.25rem] pb-20">
            <div className="flex gap-4 items-center">
                <img src="/icons/stetoscope.svg" />
                <h1 className="font-extrabold text-[3.25rem]">
                    DRA. <span className="uppercase">{name}</span>
                </h1>
            </div>
            <div className="bg-white rounded-md text-2xl p-9 max-w-max mt-8">
                <div className="flex gap-4 items-center">
                    <img src="/icons/Calendar.svg" />
                    <h3 className="text-4xl font-bold">Citas de hoy</h3>
                </div>
                <div className="flex gap-10 mt-6 mb-4">
                    <h5>
                        Completadas:{" "}
                        <span className="font-bold text-medium-soft-green">
                            14
                        </span>
                    </h5>
                    <h5>
                        Restantes:{" "}
                        <span className="font-bold text-risk">20</span>
                    </h5>
                </div>
            </div>
            <div className="bg-white rounded-md text-2xl p-9 w-[50%] mt-6">
                <div className="flex gap-4 items-center">
                    <img src="/icons/Calendar.svg" />
                    <h3 className="text-4xl font-bold">Próximas Citas</h3>
                </div>
                <div className="space-y-4 mt-6">
                    {todaysAppointments.map((appointment, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-medium">
                                    {appointment.time}
                                </p>
                                <div>
                                    <p className="font-medium">
                                        {appointment.patient}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {appointment.type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-md text-2xl p-9 w-[50%] mt-8">
                <div className="flex gap-4 items-center">
                    <img src="/icons/Attention.svg" />
                    <h3 className="text-4xl font-bold">Alertas</h3>
                </div>
                <div className="flex gap-10 mt-6 mb-4">
                    <div className="space-y-4 w-full ">
                        {todaysAlerts.map((alert, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-2 h-2 rounded-full ${
                                            alert.priority === "alta"
                                                ? "bg-alarm"
                                                : alert.priority === "media"
                                                ? "bg-risk"
                                                : "bg-medium-soft-green"
                                        }`}
                                    />
                                    <div>
                                        <p className="font-medium">
                                            {alert.type}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {alert.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
