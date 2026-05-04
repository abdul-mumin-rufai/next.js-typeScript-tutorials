import Link from "next/link";

const url = 'https://www.course-api.com/react-tours-project';

interface Toursdata { 
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
};

const fetchData = async ():Promise<Toursdata[]> => { 
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(url); // since we are using the server component we can just use the fetch without importing it.
    const tours: Toursdata[] = await response.json();
    return tours
    //console.log(tours);
};
const Tours = async () => {
    const tours = await fetchData();

    return (
        <div>
            <h1 className="text text-3xl font-bold text-center capitalize my-4">
                this is the tours page
            </h1>
            <section>
                {tours.map((tour) => {
                    return (
                        <Link className="hover:text-blue-500" key={tour.id} href={`/tours/${tour.id}`}>
                            <h2 >
                                {tour.name}
                            </h2>
                        </Link>
                        
                    )
                })}
            </section>

        </div>
        
    )
};

export default Tours;