import { EnterCodeForm } from "../molecules/EnterCodeForm"


export const EnterCodePage = () => {
    return (
        <section className="h-screen">
         <div className="h-full">           
            <div className="g-6 flex h-full  flex-wrap items-center justify-center lg:justify-between">
                <div className="mb-12 mx-auto md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 px-24">
                <EnterCodeForm />
                </div>
            </div>
          </div>
       </section>
    )
}