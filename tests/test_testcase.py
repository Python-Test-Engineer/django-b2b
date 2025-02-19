from django.test import TestCase


class GeneralTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        pass

    def test_301_VWS_url_exists_at_desired_location(self):
        response = self.client.get("/products/")
        self.assertEqual(response.status_code, 200)
