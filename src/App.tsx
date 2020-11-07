import React, { useCallback, useState } from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import {
  GlobalStyle,
  Card,
  Title,
  Form,
  Input,
  Button,
  Display,
  AlertMessage,
} from './styles';

const App: React.FC = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimal, setDecimal] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);

  const handleInputChange = useCallback(e => {
    setBinaryInput(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      for (let i = 0; i < binaryInput.length; i++) {
        if (![0, 1].includes(Number(binaryInput[i]))) {
          setIsError(true);
          return;
        }
      }

      let sum = 0;
      for (let i = 0; i < binaryInput.length; i++) {
        sum += 2 ** (binaryInput.length - 1 - i) * Number(binaryInput[i]);
      }

      setIsError(false);
      setDecimal(sum);
    },
    [binaryInput],
  );

  const showTooltip = useCallback(() => {
    setIsTooltip(true);
  }, []);

  const blurTooltip = useCallback(() => {
    setIsTooltip(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Card>
        <Title>
          <span id="first">bin</span>
          <span id="second">2</span>
          <span id="third">dec</span>
        </Title>
        <Display>{decimal}</Display>
        <AlertMessage isTooltip={isTooltip}>
          You must enter a binary number!
        </AlertMessage>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={binaryInput}
            onChange={handleInputChange}
            isError={isError}
          />
          {isError && (
            <FiAlertCircle
              size={20}
              onMouseEnter={showTooltip}
              onMouseLeave={blurTooltip}
            />
          )}

          <Button>CONVERT</Button>
        </Form>
      </Card>
    </>
  );
};

export default App;
