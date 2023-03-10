import { IUserData } from "./types";

export const defaultForms = {
  Name: {
    source: () => `
      <style>form.error-checked :invalid {outline: 1px solid red;}</style>
      First Name: <input name="first" required> <br>
      Last Name: <input name="last" required>
      <br>
      <input type="radio" name="my-radio" value="1" required> option 1
      <input type="radio" name="my-radio" value="2" required> option 2
      <br>
      <input type="checkbox" name="my-check" required> check
    `,
    getErrors: function(data: any) {
      if (data.first !== data.last) {
        return ['first and last name must be the same'];
      }
      return null;
    } 
  }, 
  Contact: {
    source: () => `Optional: <br/>  Address: <input name="address" />`,
    skippable: true
  }, 
  Review: {
    type: 'review',
    source: () => `This is a review page.`,
  },
  Submit: {
    type: 'submit',
    method: 'POST',
    source: () => 'Thank you',
    url: 'https://reqbin.com/echo/post/json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    payload: function(formUserData: IUserData): any {
      return { id: 78912 };
    },
    onSuccess: function(resp: Response) {
      console.log('resp. success', resp);
    },
    onError: function(error: Response) {
      console.log('resp. error', error);
    }
  }
};
