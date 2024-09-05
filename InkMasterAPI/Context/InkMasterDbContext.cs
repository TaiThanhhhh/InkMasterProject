using InkMasterAPI.Models;
using Microsoft.EntityFrameworkCore;
namespace InkMasterAPI.Context
{
    public class InkMasterDbContext : DbContext
    {
        public InkMasterDbContext(){}
        public InkMasterDbContext(DbContextOptions<InkMasterDbContext> options)
           : base(options)
        {

        }
        // DbSets for each table
        public DbSet<AftercareAppointment> AftercareAppointments { get; set; }
        public DbSet<AftercareReport> AftercareReports { get; set; }
        public DbSet<AppointmentDetail> AppointmentDetails { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Consultation> Consultations { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<EquipmentSupply> EquipmentSupplies { get; set; }
        public DbSet<EventParticipant> EventParticipants { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<FengShuiDate> FengShuiDates { get; set; }
        public DbSet<FinancialReport> FinancialReports { get; set; }
        public DbSet<LoyaltyPoint> LoyaltyPoints { get; set; }
        public DbSet<LoyaltyProgram> LoyaltyPrograms { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<PromotionUser> PromotionUsers { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Reminder> Reminders { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<TattooArtistPerformance> TattooArtistPerformances { get; set; }
        public DbSet<TattooCatalog> TattooCatalogs { get; set; }
        public DbSet<TattooCoverRequest> TattooCoverRequests { get; set; }
        public DbSet<TattooHistory> TattooHistories { get; set; }
        public DbSet<TattooStyle> TattooStyles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<WaitList> WaitLists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Đánh dấu các bảng không có khóa chính
            modelBuilder.Entity<AftercareAppointment>().HasNoKey();
            modelBuilder.Entity<AftercareReport>().HasNoKey();
            modelBuilder.Entity<Chat>().HasNoKey();
            modelBuilder.Entity<EquipmentSupply>().HasNoKey();
            modelBuilder.Entity<EventParticipant>().HasNoKey();
            modelBuilder.Entity<FinancialReport>().HasNoKey();
            modelBuilder.Entity<LoyaltyPoint>().HasNoKey();
            modelBuilder.Entity<LoyaltyProgram>().HasNoKey();
            modelBuilder.Entity<Notification>().HasNoKey();
            modelBuilder.Entity<Reminder>().HasNoKey();
            modelBuilder.Entity<Survey>().HasNoKey();
            modelBuilder.Entity<TattooArtistPerformance>().HasNoKey();
            modelBuilder.Entity<TattooCatalog>().HasNoKey();
            modelBuilder.Entity<TattooCoverRequest>().HasNoKey();
            modelBuilder.Entity<TattooHistory>().HasNoKey();
            modelBuilder.Entity<TattooStyle>().HasNoKey();
            modelBuilder.Entity<WaitList>().HasNoKey();

            // Các bảng có khóa chính thì không cần HasNoKey()
            modelBuilder.Entity<AppointmentDetail>();
            modelBuilder.Entity<Appointment>();
            modelBuilder.Entity<Consultation>();
            modelBuilder.Entity<Event>();
            modelBuilder.Entity<FengShuiDate>();
            modelBuilder.Entity<Payment>();
            modelBuilder.Entity<Promotion>();
            modelBuilder.Entity<PromotionUser>();
            modelBuilder.Entity<Rating>();
            modelBuilder.Entity<Schedule>();
            modelBuilder.Entity<User>();



            // Cấu hình các thuộc tính decimal trong bảng Appointment
            modelBuilder.Entity<Appointment>()
                .Property(a => a.TotalPrice)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Appointment>()
                .Property(a => a.DepositAmount)
                .HasColumnType("decimal(18,2)");

            // Cấu hình các thuộc tính decimal trong bảng FinancialReport
            modelBuilder.Entity<FinancialReport>()
                .Property(f => f.TotalIncome)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<FinancialReport>()
                .Property(f => f.TotalExpenses)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<FinancialReport>()
                .Property(f => f.NetProfit)
                .HasColumnType("decimal(18,2)");

            // Cấu hình các thuộc tính decimal trong bảng Payment
            modelBuilder.Entity<Payment>()
                .Property(p => p.PaymentAmount)
                .HasColumnType("decimal(18,2)");

            // Cấu hình các thuộc tính decimal trong bảng Promotion
            modelBuilder.Entity<Promotion>()
                .Property(p => p.DiscountPercent)
                .HasColumnType("decimal(5,2)");  // Giả định đây là % với tối đa 5 số, 2 chữ số sau dấu phẩy
        }

    }
}
