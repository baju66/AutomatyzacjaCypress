# Zbiór testów automatyzujących napisane w Cypress

## **Przypadek testowy 1: Dodawanie produktu do koszyka z głównej strony i wyświetlanie koszyka za pomocą "view cart" (add2cart.cy.js)**

  **Kroki:**

  - Otwórz stronę internetową "https://skleptest.pl".
  
  * Kliknij przycisk "Add to Cart" pod jakimkolwiek produktem na stronie głównej.
  
  * Sprawdź, czy przycisk "View Cart" jest widoczny.
  
  * Kliknij przycisk "View Cart".
  
  - Sprawdź, czy przekierowuje do strony z koszykiem zakupów.
  
  - Sprawdź, czy na stronie istnieje tekst "Produkt".
  
 **Oczekiwany rezultat:** Użytkownik przejdzie do strony z koszykiem i produkt będzie widoczny w koszyku 

## **Przypadek testowy 2: Dodawanie produktu do koszyka i wyświetlanie koszyka za pomocą przycisku "top-cart" (add2cart.cy.js)**

  **Kroki:**

  - Otwórz stronę internetową "https://skleptest.pl".
  
  - Kliknij przycisk "Add to Cart" pod jakimkolwiek produktem na stronie głównej
  
  - Kliknij przycisk "top-cart".
  
  - Sprawdź, czy przekierowuje do strony z koszykiem zakupów.
  
  - Sprawdź, czy na stronie z koszykiem zakupów znajdują się wybrane wcześniej produkty.
  - 
  **Oczekiwany rezultat:** Użytkownik przejdzie do strony z koszykiem i produkt będzie widoczny w koszyku 

## **Przypadek testowy 3: Dodawanie przedmiotów i finalizacja zamówienia jako niezalogowany użytkownik (buying.cy.js)**

  Kroki:

  - Otwórz stronę internetową "https://skleptest.pl".
  
  - Wpisz nazwę "shirt" w polu wyszukiwania na stronie głównej.
  
  - Kliknij przycisk wyszukiwania.
  
  - Sprawdź, czy wyświetliło wyniki wyszukiwania ze słowem "shirt"
  
  - Kliknij na link pierwszego produktu.
  
  - Wyczyść pole ilości produktu.
  
  - Wpisz wartość "5" w pole ilości produktu.
  
  - Kliknij przycisk "add to cart".
  
  - Kliknij przycisk "View cart".
  
  - Kliknij przycisk "Proceed to Checkout".
  
  - Wpisz imię "Robert" w polu "First Name".
  
  - Wpisz nazwisko "Krak" w polu "Last Name".
  
  - Wybierz kraj Polska z listy "Country" dostępnych.
  
  - Wpisz adres "ul. Biała 14" w polu "Street Adress".
  
  - Wpisz kod pocztowy "72-333" w polu "Postcode/ZIP".
  
  - Wpisz miasto "Warszawa" w polu "Town/City".
  
  - Wpisz numer telefonu "+48 666666666" w polu "Phone".
  
  - Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Email address".
  
  - Kliknij przycisk "Place Order".
  
  - Sprawdź, czy na stronie istnieje tekst zawierający "order received".
  
   **Oczekiwany rezultat:** Zamówienie zostanie sfinalizowane

## **Przypadek testowy 4: Dodawanie przedmiotów i finalizacja zamówienia jako zalogowany użytkownik (buying.cy.js)**

 **Kroki:**

  - Otwórz stronę internetową "https://skleptest.pl/my-account/".
  
  - Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Username or email address".
  
  - Wpisz hasło "Katana1234!" w polu "Password".
  
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Dashboard".
  
  - Wpisz nazwę "shirt" w polu wyszukiwania na stronie.
  
  - Kliknij przycisk wyszukiwania.
  
  - Sprawdź, czy istnieje link do produktu z nazwą zawierającą "shirt".
  
  - Kliknij na pierwszy produkt.
  
  - Wpisz wartość "5" w pole ilości produktu.
  
  - Kliknij przycisk "Add to cart".
  
  - Kliknij przycisk "View cart".
  
  - Kliknij przycisk "Proceed to checkout".
  
  - Kliknij przycisk "Place Order".
  
  - Sprawdź, czy na stronie istnieje tekst zawierający "order received".
  
  **Oczekiwany rezultat:** Zamówienie zostanie sfinalizowane
  
## **Przypadek testowy 5: Wpisanie danych adresowych do rozliczenia jako zalogowany użytkownik (changeBillingAdress.cy.js)**

  **Kroki:**

  - Otwórz stronę internetową "https://skleptest.pl/my-account/".
  
  - Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Username or email address".
  
  - Wpisz hasło "Katana1234!" w polu "Password".
  
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Addresses".
  
  - Kliknij na link "Edit" przy "Billing address".
  
  - Wpisz imię "Robert" w polu "First Name".
  
  - Wpisz nazwisko "Krak" w polu "Last Name".
  
  - Wybierz kraj Polska z listy "Country" dostępnych.
  
  - Wpisz adres "ul. Biała 14" w polu "Street Adress".
  
  - Wpisz kod pocztowy "72-333" w polu "Postcode/ZIP".
  
  - Wpisz miasto "Warszawa" w polu "Town/City".
  
  - Wpisz numer telefonu "+48 666666666" w polu "Phone".
 
  - Kliknij przycisk "Save address".
  
  - Sprawdź, czy na stronie istnieje tekst "Address changed successfully".
   
  **Oczekiwany rezultat:** Adres do rozliczeń zostanie zapisany.
  
## **Przypadek testowy 6: Wpisywanie danych adresowych do wysyłki jako zalogowany użytkownik (changeShippingAdress.cy.js)**

  **Kroki:**

  - Otwórz stronę internetową "https://skleptest.pl/my-account/".
  
  Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Username or email address".
  
  - Wpisz hasło "Katana1234!" w polu "Password".
  
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Addresses".
  
  - Kliknij na link "Edit" przy "Shipping address".
  
  - Wpisz imię "Robert" w polu "First Name".
  
  - Wpisz nazwisko "Krak" w polu "Last Name".
  
  - Wybierz kraj Polska z listy "Country" dostępnych.
  
  - Wpisz adres "ul. Biała 14" w polu "Street Adress".
  
  - Wpisz kod pocztowy "72-333" w polu "Postcode/ZIP".
  
  - Wpisz miasto "Warszawa" w polu "Town/City".
  
  - Kliknij przycisk "Save address".
  
  - Sprawdź, czy na stronie istnieje tekst "Address changed successfully".
  
   **Oczekiwany rezultat:** Adres do wysyłki zostanie zapisany.
  
## **Przypadek testowy 7: Logowanie z poprawnymi danymi (loginTest.cy.js)**
  
  **Kroki:**

  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Username or email address".
  
  - Wpisz hasło "Katana1234!" w polu "Password".
  
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Dashboard" w nawigacji Moje konto.
  
   **Oczekiwany rezultat:** Użytkownik zaloguje się na swoje konto.

## **Przypadek testowy 8: Logowanie z niepoprawną nazwą użytkownika (loginTest.cy.js)**

  **Kroki:**
  
  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz niepoprawną nazwę użytkownika "Admin123" w polu "Username or email address".
  
  - Wpisz poprawne hasło "Katana1234!" w polu "Password".
   
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Dashboard" w nawigacji Moje konto.
  
  **Oczekiwany rezultat:** Użytkownik nie zaloguje się na swoje konto.
  
## **Przypadek testowy 9: Logowanie z niepoprawnym hasłem (loginTest.cy.js)**

  **Kroki:**

  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Username or email address".
  
  - Wpisz niepoprawne hasło "admin12345" w polu "Password".
  
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Dashboard" w nawigacji Moje konto.
  
  **Oczekiwany rezultat:** Użytkownik nie zaloguje się na swoje konto.
  
## **Przypadek testowy 10: Logowanie i wylogowanie (loginTest.cy.js)**

  **Kroki:**

  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Username or email address".
  
  - Wpisz poprawne hasło "Katana1234!" w polu "Password".
  
  - Kliknij przycisk "Login".
  
  - Kliknij na link "Log out" w nawigacji Moje konto.
  
  **Oczekiwany rezultat:** Użytkownik zaloguje się na swoje konto i wyloguje.

## **Przypadek testowy 11: Rejestracja z poprawnymi danymi (registerTest.cy.js)**

  **Kroki:**

  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu "Email address" pod "Register"
  
  - Wpisz poprawne hasło "Katana1234!" w polu "Password" pod "Register"
  
  - Kliknij przycisk "Register"
  
  - Kliknij na link "Log out" w nawigacji Moje konto.

  **Oczekiwany rezultat:** Użytkownik zarejestruje się jako nowy użytkownik

## **Przypadek testowy 12: Rejestracja z niepoprawnym adresem e-mail (registerTest.cy.js)**

  **Kroki:**
  
  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz niepoprawny adres e-mail "nyxofotbfqgxlmzgrlbbitj.com" w polu "Email address" pod "Register".
  
  - Wpisz poprawne hasło "Katana1234!" w polu "Password" pod "Register"
  
  - Kliknij przycisk "Register".
  
  - Sprawdź, czy wyświetlony zostaje komunikat o błędnym adresie e-mail.
  
  **Oczekiwany rezultat:** Użytkownik nie zarejestruje się jako nowy użytkownik i pojawi się komunikat o błędnym formacie email
  
## **Przypadek testowy 13: Rejestracja bez podania hasła (registerTest.cy.js)**

  **Kroku:**

  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Wpisz poprawny adres e-mail "nyxofotbfqgxlmzgrl@bbitj.com" w polu "Email address" pod "Register".
  
  - Nie wpisuj żadnego hasła.
  
  - Kliknij przycisk "Register".
  
  - Sprawdź, czy wyświetlony zostaje komunikat o konieczności podania hasła.
  
  **Oczekiwany rezultat:** Użytkownik nie zarejestruje się jako nowy użytkownik i pojawi się komunikat o potrzebie wpisania hasła
  

## **Przypadek testowy 14: Rejestracja bez podania adresu e-mail i hasła (registerTest.cy.js)**

  **Kroki:**

  - Otwórz stronę "https://skleptest.pl/my-account/".
  
  - Nie wpisuj żadnego adresu e-mail ani hasła.
  
  - Kliknij przycisk "Register".
  
  - Sprawdź, czy wyświetlony zostaje komunikat o konieczności podania poprawnego adresu e-mail.
  
  **Oczekiwany rezultat:** Użytkownik nie zarejestruje się jako nowy użytkownik i wyskoczy komunikat o potrzebie wpisania email
  
  
## **Przypadek testowy 15: Wyszukiwanie produktu "shirt (searchForProduct.cy.js)"**

  **Kroki:**

  - Otwórz stronę "https://skleptest.pl".
  
  - Wpisz słowo kluczowe "shirt" w polu wyszukiwania.
  
  - Kliknij przycisk wyszukiwania.
  
  - Poczekaj 5 sekund na załadowanie wyników.
  
  - Sprawdź, czy na stronie istnieje link zawierający tekst "shirt".

  **Oczekiwany rezultat:** Wyświetli się lista produktów ze słowem "shirt"

## **Przypadek testowy 16: Wyszukiwanie produktu bez wyników (searchForProduct.cy.js)**

  **Kroki:**

  - Otwórz stronę "https://skleptest.pl".
  
  - Wpisz nieistniejące słowo kluczowe "splikiklik" w polu wyszukiwania.
  
  - Kliknij przycisk wyszukiwania.
  
  - Sprawdź, czy na stronie wyświetla się komunikat o braku wyników wyszukiwania zawierający tekst "nothing found".
  
  **Oczekiwany rezultat:** Nie wyświetli żadnego wyniki a jedynie komunikat, że niczego nie znaleziono
  
  
  
  
