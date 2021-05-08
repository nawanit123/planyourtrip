import React, { useState } from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import './Journey.scss';
import JourneyEntry from '../components/JourneyEntry';

interface Props {
  children?: React.ReactNode;
}

interface JourneyEntryType {
  source: string | null;
  destination: string | null;
  departure: Date | null;
  hotel: boolean | null;
  train: boolean | null;
  cab: boolean | null;
}

const submitHandler = () => {};

const Journey: React.FC<Props> = (props) => {
  const [entry1, setEntry1] = useState<JourneyEntryType[]>([
    {
      source: 'Mumbai',
      destination: 'Bangalore',
      departure: new Date(),
      hotel: false,
      train: false,
      cab: false,
    },
    {
      source: 'Mumbai',
      destination: 'Bangalore',
      departure: new Date(),
      hotel: false,
      train: false,
      cab: false,
    },
    {
      source: 'Mumbai',
      destination: 'Bangalore',
      departure: new Date(),
      hotel: false,
      train: false,
      cab: false,
    },
    {
      source: 'Mumbai',
      destination: 'Bangalore',
      departure: new Date(),
      hotel: false,
      train: false,
      cab: false,
    },
    {
      source: 'Mumbai',
      destination: 'Bangalore',
      departure: new Date(),
      hotel: false,
      train: false,
      cab: false,
    },
  ]);

  const handleChange = (e: any, i: number) => {
    setEntry1((prevState: any) => {
      prevState[i] = {
        ...prevState[i],
        [e.target.name]: e.target.value,
      };
      return [...prevState];
    });
  };

  const handleDate = (date: Date, i: number) => {
    setEntry1((prevState: any) => {
      prevState[i] = {
        ...prevState[i],
        departure: date,
      };
      return [...prevState];
    });
  };

  return (
    <Jumbotron className="Journey">
      {console.log(entry1)}
      <h1>Journey Planning</h1>
      <br />
      <Form onSubmit={submitHandler}>
        {entry1.map((entry, i) => (
          <JourneyEntry
            entry={entry}
            index={i}
            handleChange={handleChange}
            handleDate={handleDate}
          />
        ))}

        <Button type="submit">Submit</Button>
      </Form>
    </Jumbotron>
  );
};

export default Journey;
