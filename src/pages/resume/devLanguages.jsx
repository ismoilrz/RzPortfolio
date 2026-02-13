import "./resume.css"

const DevLanguages = () => {
    return <>
        <section className="devLangguages">
            <h5>Programming Languages</h5>
             <div className="devLangList">
                <span>JavaScript</span>
                <progress id="p" value="83" max="100"></progress>
            </div>
             <div className="devLangList">
                <span>TypeScript</span>
                <progress id="p" value="30" max="100"></progress>
            </div>
        </section>
    </>
}

export default DevLanguages;