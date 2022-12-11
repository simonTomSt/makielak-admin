export class Routes {
  static login = '/';

  static dashboard = `/dashboard`;
  static users = `${this.dashboard}/users`;

  // Content
  static content = `${this.dashboard}/content`;
  static homePageContent = `${this.dashboard}/content/home-page`;
  static aboutUs = `${this.dashboard}/content/about-us`;
  static services = `${this.dashboard}/content/services`;
  static certificates = `${this.dashboard}/content/certificates`;
  static contact = `${this.dashboard}/content/contact`;

  // Settings
  static settings = `${this.dashboard}/settings`;
  static editMyData = `${this.dashboard}/content/settings/edit-my-data`;
  static editMyPass = `${this.dashboard}/content/settings/edit-my-password`;
}
