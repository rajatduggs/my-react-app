import React from 'react';
import FrameWorks from './FrameWorks';
import ToolsSkill from './ToolsSkill';
import ConceptSkill from './ConceptSkill'


function MySkill() {
    return (
        <section id="myskill">

            <div className="row no-gutter">
                <div class="col-md-4" style={{ align: 'left' }}><h2>Languages and Frameworks</h2>
                    <FrameWorks />
                </div>
                <div class="col-md-4" style={{ align: 'left' }}><h2>Development Tools</h2>
                    <ToolsSkill /></div>
                <div class="col-md-4" style={{ align: 'left' }}><h2>Concepts</h2>
                    <ConceptSkill /></div>



            </div>



        </section>
    );


}

export default MySkill