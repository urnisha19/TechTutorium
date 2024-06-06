//It is a static component, will make it dynamic later

const Invoices = () => {
    return (
        <div className="container p-4 mx-auto sm:p-6 text-black">
            <h1 className="text-2xl md:text-3xl lg:text-4xl md:my-4 lg:my-5 text-center text-white">
                Invoices
            </h1>
            <div className="overflow-x-auto">
                <table className="w-full text-base md:text-lg">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-4">Invoice #</th>
                            <th className="p-4">Client</th>
                            <th className="p-4">Issued</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-4">
                                <p>97412378923</p>
                            </td>
                            <td className="p-4">
                                <p>John Don</p>
                            </td>
                            <td className="p-4">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-600">Friday</p>
                            </td>
                            <td className="p-4">
                                <p>$100</p>
                            </td>
                            <td className="p-4 ">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-4">
                                <p>97412378924</p>
                            </td>
                            <td className="p-4">
                                <p>Bella Watson</p>
                            </td>
                            <td className="p-4">
                                <p>15 Jan 2022</p>
                                <p className="dark:text-gray-600">Saturday</p>
                            </td>
                            <td className="p-4 ">
                                <p>$250</p>
                            </td>
                            <td className="p-4 ">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <span>Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-4">
                                <p>97412378924</p>
                            </td>
                            <td className="p-4">
                                <p>Joe Rogan</p>
                            </td>
                            <td className="p-4">
                                <p>15 Jan 2022</p>
                                <p className="dark:text-gray-600">Sunday</p>
                            </td>
                            <td className="p-4 ">
                                <p>$650</p>
                            </td>
                            <td className="p-4 ">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <span>Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-4">
                                <p>97412378924</p>
                            </td>
                            <td className="p-4">
                                <p>Emma Eric</p>
                            </td>
                            <td className="p-4">
                                <p>15 Jan 2022</p>
                                <p className="dark:text-gray-600">Monday</p>
                            </td>
                            <td className="p-4 ">
                                <p>$250</p>
                            </td>
                            <td className="p-4 ">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <span>Paid</span>
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoices;
