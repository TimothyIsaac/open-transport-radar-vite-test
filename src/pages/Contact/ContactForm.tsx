import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, FormControl, FormLabel,   FormErrorMessage,
  FormHelperText, Heading, Input, Textarea, Select, VStack, Flex, Box } from '@chakra-ui/react'
import Layout from '../../components/Layout/Layout';
import { Field, Form, Formik, FormikProps } from "formik";
import { CSSTransition } from 'react-transition-group';
import "./ContactForm.module.css";


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

  const handleInputChange = (e: any) => setInput(e.target.value)

  const isError = emailRegex.test(input)

  function validateEmail(value: string) {
    const valid = emailRegex.test(value)
    let error = ""
    if (!valid) {
     error = 'Bitte gebe deine richtige E-Mail-Adresse an!'     
    } else if (valid) {
      error = ""
    }
    return error
  }

  const initialValues: IFormInputs = {
    firstname: '',
    lastname: '',
    email: '',
    issue: '',
    text: ''
  }

  return (
    <Layout>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <CSSTransition
        in={true}
        timeout={2000}
        classNames={'contact-form'}
        appear={true}>
          <Box bg="white" p={6} rounded="md" w={600}>
            <Heading as='h2' size='xl'>Kontaktformular</Heading><br/>
            <Formik 
              initialValues={initialValues}
              onSubmit={console.log}
              >
              
              {(props: FormikProps<IFormInputs>) => (
                <Form>
                  <VStack spacing={4} align="flex-start">
                  <h1 id="my-class">TEST ÜBERSCHRIFT</h1>
                  <FormControl isRequired>
                    <FormLabel htmlFor='firstname'>Vorname</FormLabel>
                    <Field
                      as={Input}
                      id='firstname'
                      placeholder='Vorname'
                      name='firstname'
                      // validate={(value: string) => {
                      //   let error;
                      //   if (value.length < 2) {
                      //     error = "Ein Name muss mindestens 2 Buchtaben enthalten";
                      //   }
                      //   return error;

                      //}}
                      />
                  </FormControl>
                  
                  <FormControl isRequired >
                    <FormLabel htmlFor='lastname'>Nachname</FormLabel>
                    <Field as={Input} id='lastname' name='nachname' placeholder='Nachname'/>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Field as={Input}
                      id='email'
                      name='email'
                      type='email'
                      value={input}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor='issue'>Anliegen</FormLabel>
                    <Field as={Select} id='issue' name='issue' placeholder='Was ist dein Anliegen?'>
                      <option>Es fehlen Verkerhrslinien bei mir</option>
                      <option>Die ÖPNV Daten stimmen nicht</option>
                      <option>Keine Ahnung tbh</option>
                    </Field>
                  </FormControl>

                  <FormControl>
                    <Field as={Textarea}
                      name='text'
                      id='text'
                      placeholder='Schreibe uns dein Feedback'
                      size='md'
                    />
                  </FormControl>

                  <Button  colorScheme='teal' size='md' type="submit">Senden</Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Box>
          </CSSTransition>
      </Flex>
    </Layout>



    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input name="firstname" ref={register} /> {/* register an input */}
    //   <input name="lastname" ref={register({ required: true })} />
    //   {errors.lastname && 'Last name is required.'}
    //   <input name="age" ref={register({ pattern: /\d+/ })} />
    //   {errors.age && 'Please enter number for age.'}
    //   <input type="submit" />
    // </form>
  );
}

export default ContactForm;
