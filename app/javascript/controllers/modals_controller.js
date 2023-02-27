import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modals"
export default class extends Controller {
  connect() {
    console.log("Popup")
  }

  close(e) {
    e.preventDefault();

    const modal = document.getElementById("popup");
    modal.innerHTML = "";
    modal.removeAttribute("src");
    modal.removeAttribute("complete");
  }
}
