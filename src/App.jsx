import './App.css'
import useScrollPosition from "./Hooks/useScrollPosition.js";

function App() {

    const scroll = useScrollPosition();

    const handleScrollToButton = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className="container">
            <div className="scrollBarInfo">
                Scrollbar position : {Math.floor(scroll)} px
            </div>

            <h1>Some lorem text for presentation hooks work</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex hic perferendis sequi similique tenetur. A ab
                deleniti, dignissimos dolores eius exercitationem illo ipsam laudantium magni molestiae mollitia odit porro
                quae quidem quis sapiente velit! Accusantium amet atque dolores explicabo fuga, iste nam nesciunt nisi non
                placeat ratione recusandae reprehenderit voluptatibus!
            </p>
            <p>Fugit ipsum praesentium quidem veniam voluptate.
                Asperiores assumenda consequatur corporis dicta, dignissimos dolores enim explicabo id magnam nam nisi placeat
                quaerat quasi qui quia reiciendis sapiente soluta, sunt tenetur voluptas! A assumenda cum dicta doloribus, eaque
                eligendi in iure labore nam neque numquam perferendis quae quaerat quam quas tenetur ullam.
            </p>
            <p>Accusamus
                adipisci blanditiis cum delectus deserunt dolores doloribus enim est et excepturi illum ipsa iste laborum natus
                necessitatibus nihil nisi officia quasi quo, quos ratione rem rerum sint soluta sunt tempore unde veniam
                veritatis voluptas voluptate. Atque, aut ea et excepturi libero quibusdam repellendus tempora vel veniam,
                veritatis vero voluptate.</p><p>Alias illo laboriosam, praesentium reprehenderit sint suscipit tenetur. Adipisci
            beatae corporis expedita ipsam magnam magni nisi possimus quam quasi quibusdam sit totam, unde vel! Beatae
            consequatur eaque laboriosam magni optio porro quae quia quidem quos voluptas! Cumque debitis error fuga fugiat
            illo illum ipsa ipsam possimus, quisquam quod repellat tenetur.</p><p>Architecto atque corporis fugit incidunt
            modi mollitia nam qui tempore unde voluptas. Accusantium consectetur consequatur deserunt, dicta dolorem
            doloremque doloribus enim et eum harum ipsum itaque iusto minima nisi odit officia quibusdam ratione repudiandae
            sapiente sit suscipit, tempora vel veritatis! Aliquam assumenda atque consequatur laborum magni porro quaerat
            quod veniam.</p><p>Aperiam asperiores ea eligendi, ex fuga, inventore itaque iure minus omnis quasi quibusdam
            voluptas voluptatibus. Alias animi aut, consectetur deserunt expedita fuga fugiat libero modi natus, nisi
            perspiciatis, rem sed tempora? Ab aliquid eius obcaecati provident? At deserunt facere, ipsum labore libero
            placeat, quae quisquam reprehenderit saepe, suscipit vel vero.</p><p>Alias animi aperiam aut, culpa dolores eaque
            eos esse eum excepturi exercitationem facere hic iure molestiae neque nihil numquam odio perspiciatis porro
            provident quaerat, quisquam reiciendis rem repellat repudiandae saepe sint sit soluta suscipit ullam velit.
            Adipisci amet autem consequatur dolores ea nobis pariatur quos sapiente, sed soluta, vitae voluptas.</p><p>Animi
            assumenda eius excepturi ipsam sed tenetur. Architecto consequatur dolor dolore, dolorem dolorum eligendi, enim
            eveniet harum ipsa ipsum laboriosam nam nesciunt officiis optio placeat possimus quibusdam saepe, sint sunt
            voluptatum? Accusantium commodi, debitis id illo laudantium maiores necessitatibus nesciunt obcaecati, odio odit,
            officiis pariatur quam quas quisquam velit vero.</p><p>Ad aut blanditiis consequatur error eum eveniet id illo
            illum iusto labore laboriosam nemo nesciunt odit quaerat quas, quasi ratione. Fugit ipsum nulla possimus soluta?
            Accusantium aliquam aliquid amet beatae deserunt dicta exercitationem hic, ipsam nam nisi officiis omnis pariatur
            possimus praesentium quas ratione recusandae repellendus sed ullam voluptas! Deleniti?</p><p>Deleniti distinctio
            eveniet officia quis ratione reprehenderit repudiandae sapiente sed voluptas. Ab ad architecto asperiores dolore
            eligendi facere illo maiores mollitia placeat quibusdam, rem repellat soluta voluptatibus. Eius esse et libero
            mollitia omnis sit! Aperiam blanditiis debitis deleniti dolore ducimus facilis fugiat magni quia sit sunt,
            tempore, temporibus, vitae! Corporis.</p>

            <button
                className={`${scroll > 500 ? "show" : " "}` + " " + "backToTopButton"}
                onClick={handleScrollToButton}>↑</button>
        </div>
    )
}

export default App