import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card, CardContent, CardFooter, CardHeader } from "../Card";
import "./Stylebook.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import TransferIcon from "@mui/icons-material/SwapHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { IconBadge } from "../IconBadge";

export function StylebookPage() {
  return (
    <div className="stylebook">
      <h1>Stylebook</h1>

      <h2>Buttons</h2>
      <div className="stylebook-section">
        <Button
          buttonStyle="primary"
          iconLeft="add"
          onClick={() => alert("Primary button clicked")}
        >
          Primary Button
        </Button>
        <Button
          buttonStyle="secondary"
          iconRight="delete"
          onClick={() => alert("Secondary button clicked")}
        >
          Secondary Button
        </Button>
        <Button
          buttonStyle="inverted"
          onClick={() => alert("Tertiary button clicked")}
        >
          Tertiary Button
        </Button>
        <Button
          buttonStyle="outline"
          onClick={() => alert("Outline button clicked")}
        >
          Outline Button
        </Button>
      </div>
      <h2>Badges</h2>
      <div className="stylebook-section">
        <Badge
          variant="primary"
          size="sm"
          label="Primary Badge"
          iconLeft="add"
          rounded={false}
        />
        <Badge
          variant="default"
          size="md"
          label="Default Badge"
          iconRight="delete"
        />
        <Badge
          variant="success"
          size="lg"
          label="Success Badge"
          iconOnly
          iconLeft="add"
          rounded
        />
        <Badge
          variant="warning"
          size="sm"
          label="Warning Badge"
          iconRight="delete"
          iconLeft="add"
        />
        <Badge
          variant="danger"
          size="md"
          label="Danger Badge"
          rounded={false}
        />
        <Badge variant="info" size="lg" label="Info Badge" />
        <Badge variant="neutral" size="sm" label="Neutral Badge" />
      </div>

      <h2>Icon Badges</h2>
      <div className="stylebook-section">
        <IconBadge variant="primary" size="sm" icon="add" rounded={false} />
        <IconBadge variant="default" size="md" icon="delete" />
        <IconBadge variant="secondary" size="lg" icon="add" rounded />
      </div>

      <h2>Cards</h2>
      <div className="stylebook-section">
        <div className="add-card">
          <Card variant="dashed">
            <div className="card-content_add-new-account">
              <div className="add-new-account-icon-container">
                <AddIcon className="add-new-account-icon" />
              </div>

              <h4 className="add-new-account-title">Add New Account</h4>

              <p className="add-new-account-description">
                Link a new bank account or create a manual tracker.
              </p>
            </div>
          </Card>
        </div>
        <div className="simple-card">
          <Card variant="secondary">
            <span>Simple Card</span>
          </Card>
        </div>
        <div className="quick-actions-card">
          <Card variant="default">
            <CardHeader
              action={
                <Button iconOnly buttonStyle="inverted" iconLeft="more_vert" />
              }
            >
              Quick Actions
            </CardHeader>
            <CardContent>
              <div className="quick-actions">
                <Card className="quick-action-card" variant="secondary">
                  <AddIcon />
                  <span>Simple Card</span>
                </Card>
                <Card className="quick-action-card" variant="secondary">
                  <DeleteIcon />
                  <span>Simple Card</span>
                </Card>
                <Card className="quick-action-card" variant="secondary">
                  <MoneyIcon />
                  <span>Simple Card</span>
                </Card>
                <Card className="quick-action-card" variant="secondary">
                  <TransferIcon />
                  <span>Simple Card</span>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="detailed-card">
          <Card variant="secondary">
            <CardHeader
              action={
                <Button iconOnly buttonStyle="inverted" iconLeft="more_vert" />
              }
            >
              <div className="detailed-card-header-content">
                <span>
                  <IconBadge
                    variant="secondary"
                    size="lg"
                    icon="account_balance"
                  />
                </span>
                <div className="detailed-card-header-text">
                  <span className="detailed-card-header-title">Girokonto</span>
                  <span className="detailed-card-header-subtitle">
                    Checking • EUR
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="detailed-card-content">
                <span className="detailed-card-content-amount">4,250.00€</span>
                <span className="detailed-card-content-subtitle">
                  Available Balance
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="detailed-card-footer-content">
                <span className="detailed-card-footer-text">View Entries</span>
                <ArrowForwardIcon className="detailed-card-footer-icon" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
