import React from 'react';
import Accordion from "./w-1/Accordion";
import Rating from "./w-1/Rating";
import PageTitle from "./w-1/PageTitle";
import OnOff from "./w-1/OnOff";
import UncontrolledComponents from "./w-2/UncontrolledComponents";
import ControlledComponents from "./w-2/ControlledComponents";
import CustomSelect from "./w-2/CustomSelect/CustomSelect";
import Parent from "./w-2/CustomSelect/Parent";

const ReactLearning = () => {
    return (
        <>
            <PageTitle title={'React Learning'}/>
            <Accordion title={'Menu'}/>
            <Rating/>
            <OnOff/>

            <h1>Uncontrolled Components</h1><UncontrolledComponents/>
            <h1>Controlled Components</h1><ControlledComponents/>
            <h1>Custom Select</h1><Parent/>
                123
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/><br/>
            <br/><br/><br/>
            <br/><br/><br/>
            <br/><br/><br/>
            <br/><br/><br/><br/>
        </>
    );
};

export default ReactLearning;