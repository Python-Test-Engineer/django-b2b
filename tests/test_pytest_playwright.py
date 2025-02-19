# tests/test_page.py
import pytest
from playwright.sync_api import sync_playwright


@pytest.fixture
def browser():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


def test_page_is_running(browser):
    page = browser.new_page()
    page.goto("http://localhost:8000/products/")
    assert page.title() == "Django B2B"
