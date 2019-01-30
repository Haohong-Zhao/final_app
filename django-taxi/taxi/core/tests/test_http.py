from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework import reverse
from rest_framework.test import APIClient, APITestCase


PASSWORD = 'testpass'


class PublicAuthenticationTests(TestCase):
    """Test public user authentication access"""
    
    def setUp(self):
        self.client = APIClient()

    def test_user_sign_up_success(self):
        """Test a user can successfully sign up"""
        res = self.client.post(reverse('sign_up'), data={
            'username': 'test@gmail.com',
            'first_name': 'Test',
            'last_name': 'User',
            'password1': PASSWORD,
            ''
        })