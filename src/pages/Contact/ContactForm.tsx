import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, FormControl, FormLabel, FormErrorMessage,
  FormHelperText, Heading, Input, Textarea, Select, VStack, Flex, Box } from '@chakra-ui/react'
import Layout from '../../components/Layout/Layout';
import { Field, Form, Formik, FormikProps } from "formik";
import { CSSTransition } from 'react-transition-group';
import * as Yup from 'yup';
import "./ContactForm.css";


interface IFormInputs {
  firstname: string,
  lastname: string,
  email: string,
  issue: string
  text: string
}

function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>(); // initialise the hook
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };
  const emailRegex = new RegExp(
    "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"
  );

  const [input, setInput] = useState('')
  const [showForm, setShowForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false)

  const handleInputChange = (e: any) => setInput(e.target.value)

  const isError = emailRegex.test(input)

  // function validateEmail(value: string) {
  //   const valid = emailRegex.test(value)
  //   let error = ""
  //   if (!valid) {
  //    error = 'Bitte gebe deine richtige E-Mail-Adresse an!'     
  //   } else if (valid) {
  //     error = ""
  //   }
  //   return error
  // }

  // function validateEmail(value: string) {
  //   let error;
  //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = 'Invalid email address';
  //   }
  //   return error;
  // }
  
  function validateUsername(value: string) {
    let error;
    if (value === '') {
      error = 'Ey trage hier was ein!';
    }
    return error;
  }

  const initialValues: IFormInputs = {
    firstname: '',
    lastname: '',
    email: '',
    issue: '',
    text: ''
  }

  const ValidationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Vorname zu kurz!')
      .max(50, 'VorName zu lang!')
      .required('Vorname wird benötigt'),
    lastname: Yup.string()
      .min(2, 'Nachname zu kurz!')
      .max(50, 'Nachname zu lang!')
      .required('Nachname wird benötigt'),
    email: Yup.string()
      .email('Ungültige email')
      .required('E-Mail wird benötigt'),
    issue: Yup.string()
      .ensure()
      .required("Bitte gebe einen Grund an"),
    text: Yup.string()
      .min(2, 'Bitte mindestens 2 Zeichen verwenden.')
      .max(500, 'Bitte maximal 500 Zeichen verwenden.')
      .required('Bitte schreibe hier dein Feedback'),
  });

  return (
    <Layout>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">

        <CSSTransition
          in={showMessage}
          timeout={600}
          classNames="thankyou-message"
          unmountOnExit
        >
          <Heading as='h2' size='2xl'>Vielen Dank für dein Feedback!</Heading>
        </CSSTransition>   
        
        <CSSTransition
        in={showForm}
        timeout={600}
        classNames={'contact-form'}
        appear
        unmountOnExit
        onExited={() => setShowMessage(true)}
        >
          <Box bg="white" p={6} rounded="md" w={600}>
            <Heading as='h2' size='xl'>Kontaktformular</Heading><br/>
            <Formik 
              initialValues={initialValues}
              onSubmit={() => {console.log; setShowForm(false)}}
              validationSchema={ValidationSchema}
              >
              
              {({errors, touched}) => (

                <Form>
                  <VStack spacing={4} align="flex-start">
                  
                  <FormControl isRequired>
                    <FormLabel htmlFor='firstname'>Vorname</FormLabel>
                    <Field
                        as={Input}
                        id='firstname'
                        placeholder='Vorname'
                        name='firstname'
                        // validate={validateUsername}
                        />              
                    {errors.firstname && touched.firstname && <FormHelperText>{errors.firstname}</FormHelperText>}
                  </FormControl>
                    

                  
                  <FormControl isRequired >
                    <FormLabel htmlFor='lastname'>Nachname</FormLabel>
                    <Field
                      as={Input}
                      id='lastname'
                      name='lastname'
                      placeholder='Nachname'
                      //validate={validateUsername}
                    />
                    {errors.lastname && touched.lastname && <FormHelperText>{errors.lastname}</FormHelperText>}
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Field as={Input}
                      id='email'
                      name='email'
                      type='email'
                      // value={input}
                      // onChange={handleInputChange}
                      // validate={validateEmail}
                    />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                  </FormControl>


                  <FormControl>
                    <FormLabel htmlFor='issue'>Anliegen</FormLabel>
                    <Field as={Select} id='issue' name='issue' placeholder='Was ist dein Anliegen?'>
                      <option>Es fehlen Verkerhrslinien bei mir</option>
                      <option>Die ÖPNV Daten stimmen nicht</option>
                      <option>Keine Ahnung tbh</option>
                    </Field>
                    {errors.issue && touched.issue && <FormHelperText>{errors.issue}</FormHelperText>}
                  </FormControl>

                  <FormControl>
                    <Field as={Textarea}
                      name='text'
                      id='text'
                      placeholder='Schreibe uns dein Feedback'
                      size='md'
                    />
                  {errors.text && touched.text && <FormHelperText>{errors.text}</FormHelperText>}

                  </FormControl>

                  <Button
                    colorScheme='teal'
                    size='md'
                    type="submit"
                  >
                      Senden
                  </Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Box>
        </CSSTransition>
      </Flex>
    </Layout>
  );
}

export default ContactForm;
