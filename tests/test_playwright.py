# tests/test_page.py
from django.test import TestCase
from playwright.sync_api import sync_playwright


class PageTest(TestCase):
    def test_page_is_running(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto("http://localhost:8000/products/")
            self.assertEqual(page.title(), "Django B2B")
            browser.close()
