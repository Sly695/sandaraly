import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    FormButton,
} from './ContactElements';


const ContactPage = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">sly.</Icon>
                    <FormContent>
                        <Form action="https://api.staticforms.xyz/submit" method="post">
                            <input type="hidden" name="accessKey" value="1bd2be2a-d0e9-45ac-a12d-b6ad0d9066ab"/>
                            <FormH1>Contactez-moi</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput name="email" type="email" required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInput  name="message" type="text" required />
                            <input type="hidden" name="redirectTo" value="https://sandaraly.fr/success"></input>
                            <FormButton type="submit" value="Submit" >Envoyer</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ContactPage;
