# Oeffnet einen fertigen, aber UNGESENDETEN Outlook-Entwurf (Empfaenger, Betreff,
# Text, Anhaenge). Sendet nichts automatisch - das letzte Wort hat immer der Nutzer
# selbst im geoeffneten Outlook-Fenster.
#
# Beispiel (nur das Anschreiben anhaengen - der Lebenslauf ist bereits ueber den
# Portfolio-Link in der E-Mail erreichbar):
#   .\send-vorbereiten.ps1 -To "klemens.buob@sisag.ch" -Subject "Bewerbung als Softwareentwickler (m/w)" `
#     -BodyFile ".\sisag-ag-softwareentwickler\email.txt" `
#     -Attachments ".\sisag-ag-softwareentwickler\bewerbung.pdf" `
#     -FromAccount "hafner312@gmail.com"

param(
    [Parameter(Mandatory)][string]$To,
    [Parameter(Mandatory)][string]$Subject,
    [Parameter(Mandatory)][string]$BodyFile,
    [Parameter(Mandatory)][string[]]$Attachments,
    [string]$FromAccount = "hafner312@gmail.com"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $BodyFile)) { throw "BodyFile nicht gefunden: $BodyFile" }
foreach ($a in $Attachments) {
    if (-not (Test-Path $a)) { throw "Anhang nicht gefunden: $a" }
}

$outlook = New-Object -ComObject Outlook.Application
$mail = $outlook.CreateItem(0) # olMailItem

$account = $outlook.Session.Accounts | Where-Object { $_.SmtpAddress -eq $FromAccount } | Select-Object -First 1
if (-not $account) {
    $available = ($outlook.Session.Accounts | ForEach-Object { $_.SmtpAddress }) -join ", "
    throw "Konto '$FromAccount' nicht in Outlook gefunden. Verfuegbare Konten: $available"
}
$mail.SendUsingAccount = $account

$mail.To = $To
$mail.Subject = $Subject
$mail.Body = Get-Content -Raw -Encoding UTF8 $BodyFile

foreach ($a in $Attachments) {
    $mail.Attachments.Add((Resolve-Path $a).Path) | Out-Null
}

$mail.Display()
Write-Output "Outlook-Entwurf geoeffnet (nicht gesendet): $Subject -> $To (von $FromAccount)"
