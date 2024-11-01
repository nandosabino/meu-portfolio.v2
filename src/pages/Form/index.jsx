import { Section, Title, Form, Input, Textarea, ButtonForm, SubmitButton } from "../Home/styles"

const Contact = () => {
    return (
      <Section className="form" id="contact">
        <Title>
          Fale <span>Comigo!</span>
        </Title>
  
        <Form>
          <Input type="text" placeholder="Nome Completo:" required />
          <Input type="email" placeholder="Seu e-mail:" required />
          <Input type="tel" placeholder="Seu Telefone:" required />
          <Textarea placeholder="Sua mensagem aqui:" required rows="5" />
          <ButtonForm className="btn-send">
            <SubmitButton type="submit" value="ENVIAR" />
          </ButtonForm>
        </Form>
      </Section>
    );
  };
  
  export default Contact;
