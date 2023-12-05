function Cards({ selectedMenu, setSelectedMenu }) {
      return (
            <div className="flex flex-col">
                  <div className="mb-1 text-2xl font-semibold md:mb-3 lg:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                        Library
                  </div>
                  <div className="grid grid-cols-12 gap-2 lg:gap-3">
                        <div className="flex flex-col col-span-4 hover:underline hover:underline-offset-8">
                              <div className="aspect-[3/2]">
                                    <Link
                                          to={`/gallery/${selectedMenu}`}
                                          onClick={() =>
                                                setSelectedMenu("architecture")
                                          }
                                    >
                                          <img
                                                src={Cards1}
                                                alt="architecture"
                                                className="object-cover w-full h-full"
                                          />
                                    </Link>
                              </div>
                              <div
                                    className={`mt-1 text-lg font-semibold text-center lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl ${
                                          selectedMenu === "architecture"
                                                ? "underline underline-offset-8"
                                                : ""
                                    }`}
                              >
                                    <Link
                                          to={`/gallery/${selectedMenu}`}
                                          onClick={() =>
                                                setSelectedMenu("architecture")
                                          }
                                    >
                                          architecture
                                    </Link>
                              </div>
                        </div>
                        <div className="flex flex-col col-span-4 hover:underline underline-offset-8">
                              <div className="aspect-[3/2]">
                                    <Link
                                          to={`/gallery/${selectedMenu}`}
                                          onClick={() =>
                                                setSelectedMenu(
                                                      "foodandbeverage"
                                                )
                                          }
                                    >
                                          <img
                                                src={Cards2}
                                                alt="f & b"
                                                className="object-cover w-full h-full"
                                          />
                                    </Link>
                              </div>
                              <div
                                    className={`mt-1 text-lg font-semibold text-center lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl ${
                                          selectedMenu === "foodandbeverage"
                                                ? "underline underline-offset-8"
                                                : ""
                                    }`}
                              >
                                    <Link
                                          to={`/gallery/${selectedMenu}`}
                                          onClick={() =>
                                                setSelectedMenu(
                                                      "foodandbeverage"
                                                )
                                          }
                                    >
                                          f & b
                                    </Link>
                              </div>
                        </div>
                        <div className="flex flex-col col-span-4 hover:underline underline-offset-8">
                              <div className="aspect-[3/2]">
                                    <Link
                                          to={`/gallery/${selectedMenu}`}
                                          onClick={() =>
                                                setSelectedMenu("fashion")
                                          }
                                    >
                                          <img
                                                src={Cards3}
                                                alt="architecture"
                                                className="object-cover w-full h-full"
                                          />
                                    </Link>
                              </div>
                              <div
                                    className={`mt-1 text-lg font-semibold text-center lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl ${
                                          selectedMenu === "fashion"
                                                ? "underline underline-offset-8"
                                                : ""
                                    }`}
                              >
                                    <Link
                                          to={`/gallery/${selectedMenu}`}
                                          onClick={() =>
                                                setSelectedMenu("fashion")
                                          }
                                    >
                                          fashion
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
