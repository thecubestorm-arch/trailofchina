'use client'

import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'

const colors = {
  text: '#1f2933',
  accent: '#af5d32',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 34,
    fontSize: 11,
    color: colors.text,
    lineHeight: 1.45,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.accent,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 11,
    color: colors.text,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: colors.accent,
    marginTop: 10,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  checklistItem: {
    fontSize: 10.8,
    marginBottom: 6,
    color: colors.text,
  },
  checkbox: {
    color: colors.accent,
    fontWeight: 700,
  },
  footer: {
    marginTop: 18,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e8ded0',
    fontSize: 10,
    color: colors.accent,
    textAlign: 'center',
  },
})

const checklistItem = (text: string) => (
  <Text style={styles.checklistItem}>
    <Text style={styles.checkbox}>□ </Text>
    {text}
  </Text>
)

export default function ChinaChecklistPdf() {
  return (
    <Document title="China Arrival Checklist - Trail of China" author="Trail of China" subject="China travel arrival checklist">
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>China Arrival Checklist</Text>
        <Text style={styles.subtitle}>Everything you need before landing - Trail of China</Text>

        <Text style={styles.sectionTitle}>Before You Leave</Text>
        {checklistItem(
          'Check visa requirements - China offers visa-free entry for 30+ countries in 2025. Check if yours qualifies at trailofchina.com/china-basics',
        )}
        {checklistItem(
          'Buy eSIM - Airalo, Holafly, or Ubigi. Download and activate BEFORE departure. Physical SIMs available at airports but more expensive.',
        )}
        {checklistItem(
          'Install VPN - ExpressVPN or NordVPN. CRITICAL: Install BEFORE entering China. VPN websites are blocked inside China.',
        )}
        {checklistItem(
          'Download essential apps: Alipay (payments), WeChat (messaging + payments), Trip.com (trains/flights), DiDi (rides), Baidu Maps (navigation)',
        )}
        {checklistItem('Set up Alipay + WeChat Pay - Link your foreign bank card. Test with a small payment before traveling.')}
        {checklistItem('Save hotel address in Chinese characters - Show to taxi drivers. Screenshot it offline.')}
        {checklistItem('Copy passport - Photo on phone + printed copy in separate bag')}
        {checklistItem(
          'Pack: Portable charger, universal adapter (China uses Type A/C/I), comfortable walking shoes, tissues (some public restrooms lack paper), hand sanitizer',
        )}

        <Text style={styles.sectionTitle}>First 24 Hours In China</Text>
        {checklistItem('Connect to airport WiFi')}
        {checklistItem('Activate eSIM/SIM and test connection')}
        {checklistItem('Open VPN app and connect to server')}
        {checklistItem('Test Alipay/WeChat Pay at airport convenience store')}
        {checklistItem('Take DiDi or airport metro to hotel')}
        {checklistItem('Complete hotel registration (they report to police automatically)')}
        {checklistItem('Walk around your neighborhood to get oriented')}
        {checklistItem('Find nearest convenience store (FamilyMart/7-Eleven) for water/snacks')}
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>China Arrival Checklist</Text>
        <Text style={styles.subtitle}>Everything you need before landing - Trail of China</Text>

        <Text style={styles.sectionTitle}>Getting Around</Text>
        {checklistItem("Download DiDi app for rides - China's Uber. Cheaper than taxis.")}
        {checklistItem('Get metro card or use Alipay to scan QR at turnstiles')}
        {checklistItem('Use Baidu Maps for walking directions (Google Maps is inaccurate in China)')}
        {checklistItem('High-speed rail: Book on Trip.com or 12306.cn')}

        <Text style={styles.sectionTitle}>Staying Connected</Text>
        {checklistItem('Keep VPN running at all times for Google, Instagram, WhatsApp')}
        {checklistItem('WeChat is the main communication app - add travel buddies')}
        {checklistItem('Download offline translation in Google Translate or Baidu Translate')}

        <Text style={styles.sectionTitle}>Eating & Drinking</Text>
        {checklistItem('Street food is safe and delicious - follow the crowds')}
        {checklistItem('Most restaurants use QR code menus (scan with WeChat/Alipay)')}
        {checklistItem('Tap water is NOT safe to drink - always buy bottled water')}
        {checklistItem('Say "bu la" (不辣) for "not spicy" when ordering')}

        <Text style={styles.sectionTitle}>Emergency Numbers</Text>
        {checklistItem('Police: 110 | Ambulance: 120 | Fire: 119')}
        {checklistItem('Tourist hotline: 12301')}
        {checklistItem('Your embassy number: _______________')}

        <Text style={styles.footer}>Full guides at trailofchina.com | Happy travels! 🇨🇳</Text>
      </Page>
    </Document>
  )
}
