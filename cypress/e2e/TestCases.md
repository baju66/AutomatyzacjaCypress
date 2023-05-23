# Zbiór testów automatyzujących napisane w Cypress

## **Przypadek testowy 1: Dodawanie produktu do koszyka i wyświetlanie koszyka (add2cart.cy.js)**

  Kroki:

  -Otwórz stronę internetową "https://skleptest.pl".
  
  -Kliknij przycisk "Dodaj do koszyka" pierwszego produktu.
  
  -Sprawdź, czy przycisk "Zobacz koszyk" jest widoczny.
  
  -Kliknij przycisk "Zobacz koszyk".
  
  -Sprawdź, czy adres URL zawiera "/cart".
  
  -Sprawdź, czy na stronie istnieje tekst "Produkt".

## **Przypadek testowy 2: Dodawanie produktu do koszyka i wyświetlanie koszyka za pomocą przycisku "top-cart"**

  Kroki:

  -Otwórz stronę internetową "https://skleptest.pl".
  
  -Kliknij przycisk "Dodaj do koszyka" pierwszego produktu.
  
  -Poczekaj na aktualizację koszyka (opcjonalne).
  
  -Kliknij przycisk "top-cart".
  
  -Sprawdź, czy adres URL zawiera "/cart".
  
  -Sprawdź, czy na stronie istnieje tekst "Produkt".

## **Przypadek testowy 3: Dodawanie przedmiotów i finalizacja zamówienia jako niezalogowany użytkownik**

  Kroki:

  -Otwórz stronę internetową "https://skleptest.pl".
  
  -Wpisz nazwę "shirt" w polu wyszukiwania na stronie.
  
  -Kliknij przycisk wyszukiwania.
  
  -Sprawdź, czy istnieje link do produktu z nazwą zawierającą "shirt".
  
  -Kliknij na link pierwszego produktu.
  
  -Poczekaj 2 sekundy.
  
  -Wyczyść pole ilości produktu.
  
  -Wpisz wartość "5" w pole ilości produktu.
  
  -Kliknij przycisk "Dodaj do koszyka".
  
  -Kliknij przycisk "Kasuję na raz".
  
  -Kliknij przycisk "Zamawiam".
  
  -Wpisz imię "Robert" w polu imienia.
  
  -Wpisz nazwisko "Krak" w polu nazwiska.
  
  -Wybierz kraj z listy dostępnych krajów.
  
  -Wpisz adres "ul. Biała 14" w polu adresu.
  
  -Wpisz kod pocztowy "72-333" w polu kodu pocztowego.
  
  -Wpisz miasto "Warszawa" w polu miasta.
  
  -Wpisz numer telefonu "+48 666666666" w polu telefonu.
  
  -Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu adresu e-mail.
  
  -Poczekaj 3 sekundy.
  
  -Kliknij przycisk "Zamawiam".
  
  -Poczekaj 4 sekundy.
  
  -Sprawdź, czy na stronie istnieje tekst zawierający "order received".

## **Przypadek testowy 4: Dodawanie przedmiotów i finalizacja zamówienia jako zalogowany użytkownik**

  Kroki:

  -Otwórz stronę internetową "https://skleptest.pl/my-account/".
  
  -Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu nazwa użytkownika.
  
  -Wpisz hasło "Katana1234!" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Panel klienta".
  
  -Wpisz nazwę "shirt" w polu wyszukiwania na stronie.
  
  -Kliknij przycisk wyszukiwania.
  
  -Sprawdź, czy istnieje link do produktu z nazwą zawierającą "shirt".
  
  -Kliknij na link pierwszego produktu.
  
  -Poczekaj 2 sekundy.
  
  -Wyczyść pole ilości produktu.
  
  -Wpisz wartość "5" w pole ilości produktu.
  
  -Kliknij przycisk "Dodaj do koszyka".
  
  -Kliknij przycisk "Kasuję na raz".
  
  -Kliknij przycisk "Zamawiam".
  
  -Poczekaj 2 sekundy.
  
  -Sprawdź, czy na stronie istnieje tekst zawierający "order received".
  
  
## **Przypadek testowy 5: Wpisanie danych adresowych do rozliczenia jako zalogowany użytkownik**

  Kroki:

  -Otwórz stronę internetową "https://skleptest.pl/my-account/".
  
  -Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu nazwa użytkownika.
  
  -Wpisz hasło "Katana1234!" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Edytuj adres".
  
  -Kliknij na link "Edytuj" przy odpowiednim adresie.
  
  -Wpisz imię "Kamil" w polu imię.
  
  -Wpisz nazwisko "Krak" w polu nazwisko.
  
  -Wybierz kraj z listy dostępnych krajów.
  
  -Wpisz adres "ul. Biała 13" w polu adresu.
  
  -Wpisz kod pocztowy "72-335" w polu kodu pocztowego.
  
  -Wpisz miasto "Warszawa" w polu miasta.
  
  -Wpisz numer telefonu "+48666666666" w polu telefonu.
  
  -Kliknij przycisk "Zapisz zmiany".
  
  -Sprawdź, czy na stronie istnieje tekst "Address changed successfully".
  
## **Przypadek testowy 6: Wpisywanie danych adresowych do wysyłki jako zalogowany użytkownik**

  Kroki:

  -Otwórz stronę internetową "https://skleptest.pl/my-account/".
  
  -Wpisz adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu nazwa użytkownika.
  
  -Wpisz hasło "Katana1234!" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Edytuj adres".
  
  -Kliknij na link "Edytuj" przy odpowiednim adresie.
  
  -Wpisz imię "Kamil" w polu imię.
  
  -Wpisz nazwisko "Krak" w polu nazwisko.
  
  -Wybierz kraj z listy dostępnych krajów.
  
  -Wpisz adres "ul. Biała 13" w polu adresu.
  
  -Wpisz kod pocztowy "72-335" w polu kodu pocztowego.
  
  -Wpisz miasto "Warszawa" w polu miasta.
  
  -Kliknij przycisk "Zapisz zmiany".
  
  -Sprawdź, czy na stronie istnieje tekst "Address changed successfully".
  
  
## **Przypadek testowy 7: Logowanie z poprawnymi danymi**
  
  Kroki:

  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu nazwa użytkownika.
  
  -Wpisz poprawne hasło "Katana1234!" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Dashboard" w nawigacji Moje konto.

## **Przypadek testowy 8: Logowanie z niepoprawną nazwą użytkownika**

  Kroki:
  
  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz niepoprawną nazwę użytkownika "Admin123" w polu nazwa użytkownika.
  
  -Wpisz poprawne hasło "Katana1234!" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Dashboard" w nawigacji Moje konto.
  
  
## **Przypadek testowy 9: Logowanie z niepoprawnym hasłem**

  Kroki:

  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu nazwa użytkownika.
  
  -Wpisz niepoprawne hasło "admin12345" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Dashboard" w nawigacji Moje konto.
  
## **Przypadek testowy 10: Logowanie i wylogowanie**

  Kroki:

  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu nazwa użytkownika.
  
  -Wpisz poprawne hasło "Katana1234!" w polu hasła.
  
  -Kliknij przycisk "Zaloguj się".
  
  -Kliknij na link "Wyloguj się" w nawigacji Moje konto.

## **Przypadek testowy 11: Rejestracja z poprawnymi danymi**

  Kroki:

  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz poprawny adres e-mail "bmykcdkpqgtlydkwuc@bbitf.com" w polu adres e-mail.
  
  -Wpisz poprawne hasło "Katana1234!" w polu hasło.
  
  -Kliknij przycisk "Zarejestruj się".
  
  -Kliknij na link "Wyloguj się" w nawigacji Moje konto.

## **Przypadek testowy 12: Rejestracja z niepoprawnym adresem e-mail**

  Kroki:
  
  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz niepoprawny adres e-mail "nyxofotbfqgxlmzgrlbbitj.com" w polu adres e-mail.
  
  -Wpisz poprawne hasło "Katana1234!" w polu hasło.
  
  -Kliknij przycisk "Zarejestruj się".
  
  -Sprawdź, czy wyświetlony zostaje komunikat o błędnym adresie e-mail.
  
  -Kliknij na link "Wyloguj się" w nawigacji Moje konto.

## **Przypadek testowy 13: Rejestracja bez podania hasła**

  Kroku:

  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Wpisz poprawny adres e-mail "nyxofotbfqgxlmzgrl@bbitj.com" w polu adres e-mail.
  
  -Nie wpisuj żadnego hasła.
  
  -Kliknij przycisk "Zarejestruj się".
  
  -Sprawdź, czy wyświetlony zostaje komunikat o konieczności podania hasła.
  
  -Kliknij na link "Wyloguj się" w nawigacji Moje konto.

## **Przypadek testowy 14: Rejestracja bez podania adresu e-mail i hasła**

  Kroki:

  -Otwórz stronę "https://skleptest.pl/my-account/".
  
  -Nie wpisuj żadnego adresu e-mail ani hasła.
  
  -Kliknij przycisk "Zarejestruj się".
  
  -Sprawdź, czy wyświetlony zostaje komunikat o konieczności podania poprawnego adresu e-mail.
  
  -Kliknij na link "Wyloguj się" w nawigacji Moje konto.
  
## **Przypadek testowy 15: Wyszukiwanie produktu "shirt"**

  Kroki:

  -Otwórz stronę "https://skleptest.pl".
  
  -Wpisz słowo kluczowe "shirt" w polu wyszukiwania.
  
  -Kliknij przycisk wyszukiwania.
  
  -Poczekaj 5 sekund na załadowanie wyników.
  
  -Sprawdź, czy na stronie istnieje link zawierający tekst "shirt".

## **Przypadek testowy 16: Wyszukiwanie produktu bez wyników**

  Kroki:

  -Otwórz stronę "https://skleptest.pl".
  
  -Wpisz nieistniejące słowo kluczowe "splikiklik" w polu wyszukiwania.
  
  -Kliknij przycisk wyszukiwania.
  
  -Sprawdź, czy na stronie wyświetla się komunikat o braku wyników wyszukiwania zawierający tekst "nothing found".
  
  
  
  
