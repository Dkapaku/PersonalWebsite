const Skills=()=>{
    return(
        <div className="skillsTab fade-in">
            <div>
                <label for="skill_1">Foreign Language:</label> 
                <meter id="skill_1" value="9.5" min="0" max="10"></meter>
            </div>
            <div>
                <label for="skill_2">HTML5/CSS3:</label>
                <meter id="skill_2" value="9"min="0"max="10"></meter>
            </div>
            <div>
                <label for="skill_3">Vanilla JS</label>
                <meter id="skill_3" value="9"min="0"max="10"></meter>
            </div>
            <div>
                <label for="skill_4">React.js</label>
                <meter id="skill_4"value="8.5"min="0"max="10"></meter>
            </div>
            <div>
                <label for="skill_5">Node.js</label>
                <meter id="skill_5"value="7"min="0"max="10"></meter>
            </div>
            <div>
                <label for="skill_6">Interpersonal Skills</label>
                <meter id="skill_6"value="9"min="0"max="10"></meter>
            </div>
        </div>
    )
}
export default Skills