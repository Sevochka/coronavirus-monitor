import React from 'react';

const Symptoms: React.FC = () => (
  <>
    <p>
      The COVID-19 coronavirus infection affects different groups of people to varying degrees. U
      the majority of infected people have a mild or moderate form of the disease, and they do not
      hospitalization is required.
    </p>
    <hr className="hr-circle" />
    <p>
      <h4 className="p-header">Frequently observed symptoms:</h4>
      <ul>
        <li>Fervescence</li>
        <li>Dry cough</li>
        <li>Fatigability</li>
      </ul>
    </p>

    <p>
      <h4 className="p-header">Some infected people may also have:</h4>
      <ul>
        <li>A variety of pain</li>
        <li>Sore throat</li>
        <li>Diarrhea</li>
        <li>Conjunctivitis</li>
        <li>Headache</li>
        <li>Loss of sense of smell and taste</li>
        <li>Skin rash or depigmentation of the nails on the hands and feet</li>
      </ul>
    </p>
  </>
);

export default Symptoms;
