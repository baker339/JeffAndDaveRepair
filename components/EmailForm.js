import React from "react";
import { StyleSheet, Text, View } from "react-native";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { init } from "emailjs-com";
init("user_thooo9ffMBKAHDuOtYJZm");

const EmailForm = ({ modalVis }) => {
  const SERVICE_ID = "service_l036xhw";
  const TEMPLATE_ID = "template_gf9k88y";
  const USER_ID = "user_thooo9ffMBKAHDuOtYJZm";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        modalVis(false);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <View style={styles.Form}>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="rgb(234, 84, 85)">
          Submit
        </Button>
      </Form>
    </View>
  );
};

export default EmailForm;

const styles = StyleSheet.create({
  Form: {
    border: "1px solid lightgray",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
  },
});
