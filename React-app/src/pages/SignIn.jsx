import React from 'react';

function SignIn() {
  return (
    <main className="main">
      <div className="main__container container">
        <section className="main__sign-in sign-in">
          <h2 className="sign-in__title">Вход</h2>
          <form className="sign-in__form" action="/login" method="post">
            <label className="sign-in__label" htmlFor="username">
              E-mail:
            </label>
            <input className="sign-in__input" type="mail" id="username" name="username" required />
            <br />
            <label className="sign-in__label" htmlFor="password">
              Пароль:
            </label>
            <input
              className="sign-in__input"
              type="password"
              id="password"
              name="password"
              required
            />
            <br />
            <button className="sign-in__button button" type="submit">
              Войти
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default SignIn;
