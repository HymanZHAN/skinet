using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression(
            "(?=^.{6,}$)((?=.*\\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!\"$%&\\/\\(\\)\\?\\^\\'\\\\\\+\\-\\*]))^.*",
            ErrorMessage = "Password must be of minimum length of 6 and has at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        )]
        public string Password { get; set; }
    }
}