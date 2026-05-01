import CounterPage from "@/components/counterPage";


function Counter() {
  return (
      <section>
          <p className="text-3xl font-bold">
            This is a sever component hosting a client component. ie 
            nested component
          </p>
          <CounterPage/>
      </section>
      
    );
}

export default Counter;