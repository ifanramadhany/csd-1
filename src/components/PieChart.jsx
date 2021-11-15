import React from "react";
import { Pie } from "react-chartjs-2";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function PieChart({buttonMenu}) {
  return (
    <div 
    className={`${
      buttonMenu
        ? "shadow-2xl my-4 flex flex-col h-full w-100 items-center rounded-md"
        : "shadow-2xl my-4 flex flex-col h-full w-11/12 items-center rounded-md"
    }`}
    >
      {/* title chart  */}
      <span className="pt-2 py-2 text-center text-transform: uppercase bg-white w-full rounded-tl-md rounded-tr-md">
        Currency
      </span>
      {/* details  */}
      <div className="px-2 bg-white w-full">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Details</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "transform rotate-180 transtition duration-300 ease-in-out"
                      : "transtition duration-300 ease-in-out"
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div class="shadow overflow-hidden rounded border-b border-gray-200">
                  <table class="min-w-full bg-white">
                    <thead class="bg-gray-800 text-white">
                      <tr>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                          No
                        </th>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                          Denom
                        </th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                          Qty
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-700">
                      <tr>
                        <td class="w-1/3 text-left py-3 px-4">1</td>
                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                        <td class="text-left py-3 px-4">
                          <a class="hover:text-blue-500" href="tel:622322662">
                            100
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td class="w-1/3 text-left py-3 px-4">2</td>
                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                        <td class="text-left py-3 px-4">
                          <a class="hover:text-blue-500" href="tel:622322662">
                            100
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-1/3 text-left py-3 px-4">3</td>
                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                        <td class="text-left py-3 px-4">
                          <a class="hover:text-blue-500" href="tel:622322662">
                            100
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      {/* BarChart  */}
      <div className="bg-white h-full w-full border-14 border-white rounded-bl-md rounded-br-md">
        <div className="bg-gray-200 p-2 h-96 w-full border-white rounded-md">
          <Pie
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3, 17],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
