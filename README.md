# formik-sample

## Visited fileds

```js
const validate = (values) => {
  const errors: Errors = {} as Errors;
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or lesse'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters of less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}
```

エラーがない場合（つまり、検証関数が{}を返した場合）、useFormik（）に渡したonSubmit関数の実行のみを続行します。
このコンポーネントでは、エラーが存在するかどうかを確認し、すぐにユーザーに表示します。

ユーザーがまだアクセスしていないフィールドのエラーメッセージを表示するので、これは厄介です。

ほとんどの場合、ユーザーがフィールドへの入力を完了した後にのみ、フィールドのエラーメッセージを表示したいと考えています。

`errors` や `values` と同様に、Formikはどのフィールドにアクセスしたかを追跡できます。

この情報は、`values` / `initialValues`の形状も反映する`touched`というオブジェクトに格納されますが、各キーはブール値のtrue / falseのみにすることができます。

`touched`を利用するために、`formik.handleBlur`を各入力の`onBlur`プロパティに渡すことができます。この関数は、`name`属性を使用して更新するフィールドを特定するという点で、`formik.handleChange`と同様に機能します。

もうすぐです！タッチを追跡しているので、エラーメッセージのレンダリングロジックを変更して、フィールドのエラーメッセージが存在し、ユーザーが特定のフィールドにアクセスした場合にのみ表示するようにできます。

## Schema Validation with Yup
上記のように、検証はあなたに任されています。独自のバリデーターを作成するか、サードパーティのヘルパーライブラリを使用してください。Formikの作成者/そのユーザーの大部分は、オブジェクトスキーマの検証にJasonQuenseのライブラリYupを使用しています。

Formikには、`validationSchema`と呼ばれるYupの特別な構成オプション/小道具があり、Yupの検証エラーメッセージを、キーが`values` / `initialValues` / `touched`と一致するきれいなオブジェクトに自動的に変換します。


```js
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters of less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  ```

## getFieldProps()

`onChange={handleChange}`, `onBlur={handleBlur}` をいちいち書かなくていい。
特定のフィールドでチェックされた `onChange`、`onBlur`、`value`の正確なグループが返されます。次に、それを入力、選択、またはテキスト領域に広げることができます

```js
  <input
    id="lastName"
    type="text"
    {...formik.getFieldProps('lastName')}
  />
```
